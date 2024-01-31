'use client'
import styles from './EventForm.module.css';
import { eventData } from "../../../../../api/events/_utilities/eventsOperations";
import { useState, useEffect, useRef } from 'react';

type eventFormState = {
    id: number|null,
    title: string,
    subtitle: string,
    date: string,
    excerpt: string,
    deleteUploadedImg?: boolean,
    imageSrc: string|null,
    imageAlt: string,
    content: string
}

const emptyForm: eventFormState = {
    id: null,
    title: "",
    subtitle: "",
    date: "",
    excerpt: "",
    deleteUploadedImg: false,
    imageSrc: null,
    imageAlt: "",
    content: ""
};

export default function EventForm ({formMode, editEventData, cancelEditMode, handleAddEvent, handleUpdateEvent}: {formMode: 'ADD NEW EVENT' | 'EDIT EVENT', editEventData: eventData | null, cancelEditMode: () => void, handleAddEvent: (formData: FormData) => void, handleUpdateEvent: (formData: FormData) => void}) {

    const [eventFormData, setEventFormData] = useState(emptyForm);
    const fileInputRef = useRef<HTMLInputElement>(null);

    useEffect(() => {
        if (formMode === 'EDIT EVENT' && editEventData) {
            setEventFormData({...editEventData, deleteUploadedImg: false});
        } else {
            setEventFormData(emptyForm);
        }
    }, [formMode, editEventData]);

    const inputChangeHandler = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setEventFormData((prevState) => ({
          ...prevState,
          [e.target.name]: e.target.value
        }));
    };

    const checkboxDeleteImageHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        setEventFormData((prevState) => ({
            ...prevState,
            deleteUploadedImg: e.target.checked
          }));
    }

    const resetForm = () => {
        cancelEditMode();
        setEventFormData(emptyForm);
        fileInputRef.current!.value = "";
    }

    const submitHandler = (formData: FormData) => {
        const image: File|null = formData.get('image') as File;
        if ( image && image.size === 0 ) {
            formData.delete("image");
        }
        if (formMode === 'EDIT EVENT') {
            formData.set("id", eventFormData.id!.toString());
            handleUpdateEvent(formData);
        }
        if (formMode === 'ADD NEW EVENT') {
            handleAddEvent(formData);
        }
        resetForm();
    }

    return (
        <form action={submitHandler} className={styles.form}>
            <h3 className={styles.formMode}>{(formMode === 'EDIT EVENT') ? 'edit exixting event' : 'add new event'}</h3>
            <div className={styles.formInput}>
                <label htmlFor="title">title</label>
                <input type="text" name="title" id="title" onChange={inputChangeHandler} value={eventFormData.title}/>
            </div>
            <div className={styles.formInput}>
                <label htmlFor="subtitle">subtitle</label>
                <input type="text" name="subtitle" id="subtitle" value={eventFormData.subtitle} onChange={inputChangeHandler}/>
            </div>
            <div className={styles.formInput}>
                <label htmlFor="date">date</label>
                <input type="date" name="date" id="date" onChange={(e) => console.log(e.target.value)}/>
            </div>
            <div className={styles.formInput}>
                <label htmlFor="excerpt">excerpt</label>
                <input type="text" name="excerpt" id="excerpt" value={eventFormData.excerpt} onChange={inputChangeHandler}/>
            </div>
            <div className={styles.formInput}>
                <label htmlFor="content">description</label>
                <textarea name="content" id="content" cols={30} rows={12} value={eventFormData.content} onChange={inputChangeHandler}></textarea>
            </div>
            {   
                eventFormData.imageSrc &&
                <div className={styles.uploadedImageControl}>
                    <input type="checkbox" name="deleteUploadedImg" id="deleteUploadedImg" value={eventFormData.imageSrc} checked={eventFormData.deleteUploadedImg} onChange={checkboxDeleteImageHandler}/>
                    <label htmlFor="deleteUploadedImg">Uploaded image: {eventFormData.imageSrc} (check to delete)</label>
                </div>
            }
            <div className={styles.formInput}>
                <label htmlFor="image">add image</label>
                <input id="image" name="image" type="file" accept="image/png, image/jpeg" disabled={ !!eventFormData.imageSrc && !eventFormData.deleteUploadedImg} value={undefined} ref={fileInputRef}/>
            </div>
            <div className={styles.formInput}>
                <label htmlFor="imageAlt">image description</label>
                <input type="text" name="imageAlt" id="imageAlt" value={eventFormData.imageAlt} onChange={inputChangeHandler}/>
            </div>
            <div className={styles.buttons}>
                <button type="submit" className={styles.buttonSecondary}>{(formMode === 'EDIT EVENT') ? 'Update Event' : 'Add Event'}</button>
                <button type="button" onClick={resetForm} className={styles.buttonPrimary}>{(formMode === 'EDIT EVENT') ? 'Go Back' : 'Clear Form'}</button>
            </div>
        </form>
    )
}
