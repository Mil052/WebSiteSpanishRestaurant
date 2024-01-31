import { NextResponse } from "next/server";
import { addNewEvent, addEventImage, deleteImage, deleteEvent, getCashedEvents, updateEvent, eventData } from "./_utilities/eventsOperations";
import { validateEventData, ValidationError } from './_utilities/validateEventData';
import { revalidatePath } from 'next/cache';

export const POST = async (request: Request) => {
  const formData = await request.formData();
  const idNumber = Date.now();

  const newEventData = {
    id: idNumber,
    title: formData.get('title'),
    subtitle: formData.get('subtitle'),
    date: formData.get('date'),
    excerpt: formData.get('excerpt'),
    imageSrc: null,
    imageAlt: formData.get('imageAlt'),
    content: formData.get('content')
  } as eventData;

  const image: File | null = formData.get("image") as File;
  if (image && (image.size > 0)) {
    newEventData.imageSrc = Date.now() + image.name.replaceAll(" ", "_");
  }

  try {
    validateEventData(newEventData);
    if (newEventData.imageSrc) {
      addEventImage(image, newEventData.imageSrc);
    }
    addNewEvent(newEventData);
    revalidatePath('/events');
    return NextResponse.json({message: "Success"}, {status: 201});
  } catch (error) {
    if (error instanceof ValidationError) {
      return NextResponse.json({error: error.message}, {status: 400});
    } else {
      return NextResponse.json({error: "An error occurred. Failed to add new event."}, {status: 500});
    }
  }
};

// https://stackoverflow.com/questions/72663673/how-do-i-get-uploaded-image-in-next-js-and-save-it

// Buffer is a way to store and manipulate binary data in Node.js

// https://nodejs.org/en/learn/manipulating-files/writing-files-with-nodejs

export const DELETE = async (request: Request) => {
  const event = await request.json() as {eventId: number, imageFileName: string|null};
  try {
    if (event.imageFileName) {
      deleteImage(event.imageFileName);
    }
    deleteEvent(event.eventId);
    revalidatePath('/events');
    return NextResponse.json({message: "Success"}, {status: 200})
  } catch (error) {
    console.log("Error occured ", error);
    return NextResponse.json({error: "Failed"}, {status: 500});
  }
}

export const GET = (request: Request) => {
  try {
    const events = getCashedEvents();
    return Response.json(events, {status: 200});
  } catch (error) {
    console.log("Error occured ", error);
    return NextResponse.json({error: "Failed"}, {status: 500});
  }
}

export const PATCH = async (request: Request) => {
  const formData = await request.formData();
  let preserveExistingImage = true;
  let imageFileName: string|null = null;

  const eventId = parseInt(formData.get("id") as string);
  console.log('event Id: ', eventId);
  const deleteUploadedImg = formData.get("deleteUploadedImg") as string|null;
  console.log('delete uploaded image: ', deleteUploadedImg);
  const image = formData.get("image") as File;
  console.log('image from request: ', image?.name);
  console.log('image size: ', image?.size);

  try {
    if (deleteUploadedImg) {
      preserveExistingImage = false;
      deleteImage(deleteUploadedImg);
    }
    if (image && (image.size > 0)) {
      preserveExistingImage = false;
      imageFileName = Date.now() + image.name.replaceAll(" ", "_");
      addEventImage(image, imageFileName);
    }

    const newEventData = {
      id: eventId,
      title: formData.get('title'),
      subtitle: formData.get('subtitle'),
      date: formData.get('date'),
      excerpt: formData.get('excerpt'),
      imageSrc: imageFileName,
      imageAlt: formData.get('imageAlt'),
      content: formData.get('content')
    } as eventData;
    
    updateEvent(newEventData, preserveExistingImage);
    revalidatePath('/events');
    return NextResponse.json({message: "Success"}, {status: 201});
  } catch (error) {
    console.log("Error occured ", error);
    return NextResponse.json({error: "Failed"},{status: 500});
  }
}