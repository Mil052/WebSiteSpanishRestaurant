'use client'
import styles from './EventForm.module.css';
import { eventData } from "../../../../../_utilities/eventsOperations";
import { useState, useEffect, useRef } from 'react';

type eventFormData = {
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

const emptyForm: eventFormData= {
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

export default function EventForm ({editEventMode, editEventData, submitEvent, resetFormMode}: {editEventMode: boolean, editEventData: eventData | null, submitEvent: (formData: FormData) => Promise<void>, resetFormMode: () => void}) {

    const [eventFormData, setEventFormData] = useState(emptyForm);
    const fileInputRef = useRef<HTMLInputElement>(null);

    useEffect(() => {
        if (editEventMode && editEventData) {
            setEventFormData({...editEventData, deleteUploadedImg: false});
        } else {
            setEventFormData(emptyForm);
        }
    }, [editEventMode, editEventData])

    const changeHandler = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setEventFormData((prevState) => ({
          ...prevState,
          [e.target.name]: e.target.value
        }));
    };

    const changeDeleteImageHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        setEventFormData((prevState) => ({
            ...prevState,
            deleteUploadedImg: e.target.checked
          }));
    }

    const resetForm = () => {
        resetFormMode();
        setEventFormData(emptyForm);
        fileInputRef.current!.value = "";
    }

    const formSubmitHandler = (formData: FormData) => {
        if (editEventMode) {
            formData.set("id", eventFormData.id!.toString());
        }

        const image: File|null = formData.get('image') as File;
        console.log('form image size ', image?.size);

        if ( image && image.size === 0 ) {
            formData.delete("image");
        }
        submitEvent(formData);
        resetForm();
    }

    return (
        <form action={formSubmitHandler} className={styles.form}>
            <h3 className={styles.formMode}>{editEventMode ? 'edit exixting event' : 'add new event'}</h3>
            <div className={styles.formInput}>
                <label htmlFor="title">title</label>
                <input type="text" name="title" id="title" onChange={changeHandler} value={eventFormData.title}/>
            </div>
            <div className={styles.formInput}>
                <label htmlFor="subtitle">subtitle</label>
                <input type="text" name="subtitle" id="subtitle" value={eventFormData.subtitle} onChange={changeHandler}/>
            </div>
            <div className={styles.formInput}>
                <label htmlFor="date">date</label>
                <input type="date" name="date" id="date" onChange={(e) => console.log(e.target.value)}/>
            </div>
            <div className={styles.formInput}>
                <label htmlFor="excerpt">excerpt</label>
                <input type="text" name="excerpt" id="excerpt" value={eventFormData.excerpt} onChange={changeHandler}/>
            </div>
            <div className={styles.formInput}>
                <label htmlFor="content">description</label>
                <textarea name="content" id="content" cols={30} rows={12} value={eventFormData.content} onChange={changeHandler}></textarea>
            </div>
            {   
                eventFormData.imageSrc &&
                <div className={styles.uploadedImageControl}>
                    <input type="checkbox" name="deleteUploadedImg" id="deleteUploadedImg" value={eventFormData.imageSrc} checked={eventFormData.deleteUploadedImg} onChange={changeDeleteImageHandler}/>
                    <label htmlFor="deleteUploadedImg">Uploaded image: {eventFormData.imageSrc} (check to delete)</label>
                </div>
            }
            <div className={styles.formInput}>
                <label htmlFor="image">add image</label>
                <input id="image" name="image" type="file" accept="image/png, image/jpeg" disabled={ !!eventFormData.imageSrc && !eventFormData.deleteUploadedImg} value={undefined} ref={fileInputRef}/>
            </div>
            <div className={styles.formInput}>
                <label htmlFor="imageAlt">image description</label>
                <input type="text" name="imageAlt" id="imageAlt" value={eventFormData.imageAlt} onChange={changeHandler}/>
            </div>
            <div className={styles.buttons}>
                <button type="submit" className={styles.buttonSecondary}>{editEventMode ? 'Update Event' : 'Add Event'}</button>
                <button type="button" onClick={resetForm} className={styles.buttonPrimary}>{editEventMode ? 'Go Back' : 'Clear Form'}</button>
            </div>
        </form>
    )
}
