import { eventData } from './eventsOperations';

export class ValidationError extends Error {};

export function validateEventData (event: eventData) {
    const { title, date, content } = event;
    const validationError: string[] = [] ;

    if (!title) {
        validationError.push('Title');
    } 
    const dateIsIncorrect = isNaN(new Date(date).valueOf());
    if (dateIsIncorrect) {
        validationError.push('Date');
    }
    if (!content) {
        validationError.push('Content');
    }

    if (validationError.length === 0) {
        return;
    } else {
        throw new ValidationError(`Event data invalid. ${validationError.length > 1 ? 'Properties' : 'Property'} ${validationError.join(', ')} are missing or invalid.`, {cause: validationError});
    }
}