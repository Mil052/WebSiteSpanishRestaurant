'use client'

import styles from './Carousel.module.css';
import { useEffect, useReducer, useRef } from 'react';
import { CarouselItemData } from '../carouselData';
import CarouselItem from './CarouselItem/CarouselItem';

// Carousel Items classes:
const Active = '';
const ActiveFromRight = styles.rightToCenter;
const ActiveFromLeft = styles.leftToCenter;
const HideToLeft = styles.centerToLeft;
const HideToRight = styles.centerToRight;
const Hidden = styles.carouselItemHidden;

// Carousel Items state reducer:
type ItemsState = {
    activeItemIndex: number,
    quantity: number,
    itemsClasses: string[]
}

type ActionType = {
    type: string,
    newItemsQuantity?: number
}

function createInitialState (itemsQuantity: number) {
    const initialState: ItemsState = {
        activeItemIndex: 0,
        quantity: itemsQuantity,
        itemsClasses: new Array(itemsQuantity).fill(Hidden).fill(Active, 0 , 1)
    }
    return initialState;
}

function reducer (state: ItemsState, action: ActionType):ItemsState {
  switch (action.type) {
    case 'next': {
        const previousItemIndex = state.activeItemIndex;
        const nextItemIndex = (state.activeItemIndex + 1) % state.quantity;

        let actualizedItemClasses = [...state.itemsClasses].fill(Hidden);
        actualizedItemClasses[previousItemIndex] = HideToLeft;
        actualizedItemClasses[nextItemIndex] = ActiveFromRight;
        
        return {
            ...state,
            activeItemIndex: nextItemIndex,
            itemsClasses: actualizedItemClasses
        };
    }
    case 'previous': {
        const previousItemIndex = state.activeItemIndex;
        const nextItemIndex = (state.quantity + state.activeItemIndex - 1) % state.quantity;

        let actualizedItemClasses = [...state.itemsClasses].fill(Hidden);
        actualizedItemClasses[previousItemIndex] = HideToRight;
        actualizedItemClasses[nextItemIndex] = ActiveFromLeft;
        
        return {
            ...state,
            activeItemIndex: nextItemIndex,
            itemsClasses:  actualizedItemClasses
        };
    }
    case 'reset': {
        return {
            activeItemIndex: 0,
            quantity: action.newItemsQuantity!,
            itemsClasses: new Array(action.newItemsQuantity).fill(Hidden).fill(Active, 0 , 1)
        }
    }
    default:
        return state;
  }
}

// Carousel component:
export default function Carousel ({ items }:{items: CarouselItemData[]}) {

    const [carouselItemsState, dispatchItemsState] = useReducer(reducer, items.length, createInitialState);
    const carouselInterval = useRef<ReturnType<typeof setInterval>>();

    const nextHandler = () => {
        dispatchItemsState({type: 'next'});
        clearInterval(carouselInterval.current);
        carouselInterval.current = setInterval(() => {
            dispatchItemsState({type: 'next'});
        }, 8000);
    }

    const previousHandler = () => {
        dispatchItemsState({type: 'previous'});
        clearInterval(carouselInterval.current);
        carouselInterval.current = setInterval(() => {
            dispatchItemsState({type: 'next'});
        }, 8000);
    }

    useEffect(() => {
        carouselInterval.current = setInterval(() => {
            dispatchItemsState({type: 'next'});
        }, 8000);
        return () => clearInterval(carouselInterval.current);
    }, []);

    useEffect(() => {
        const newItemsQuantity = items.length;
        dispatchItemsState({type: 'reset', newItemsQuantity: newItemsQuantity });
    },[items]);

    return (
        <>
            <div className={styles.carousel}>
                {items.map((item, index) => (
                   <CarouselItem item={item} carouselItemStateClass={carouselItemsState.itemsClasses[index]} key={index} />
                ))}
            </div>
            <div className={styles.buttons}>
                <button onClick={nextHandler}>NEXT</button>
                <button onClick={previousHandler}>PREVIOUS</button>
            </div>
        </>
    );
}