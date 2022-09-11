import React from 'react';
import {ImageList, ImageListItem} from "@mui/material";
import {isMobileMode} from "../utils/lib";

const Gallery = () => {

    const itemData = [
        {
            img: 'https://mhamid.tours/static/media/gallery/242453090.jpg',
            title: 'Breakfast',
            rows: 2,
            cols: 2,
        },
        {
            img: 'https://mhamid.tours/static/media/gallery/337562076.jpg',
            title: 'Burger',
        },
        {
            img: 'https://mhamid.tours/static/media/gallery/337562303.jpg',
            title: 'Camera',
        },
        {
            img: 'https://mhamid.tours/static/media/gallery/337562357.jpg',
            title: 'Coffee',
            cols: 2,
        },
        {
            img: 'https://mhamid.tours/static/media/gallery/337562404.jpg',
            title: 'Hats',
            cols: 2,
        },
        {
            img: 'https://mhamid.tours/static/media/gallery/337567323.jpg',
            title: 'Honey',
            author: '@arwinneil',
            rows: 2,
            cols: 2,
        },
        {
            img: 'https://mhamid.tours/static/media/gallery/337567458.jpg',
            title: 'Basketball',
        },
        {
            img: 'https://mhamid.tours/static/media/gallery/337567485.jpg',
            title: 'Fern',
        },
        {
            img: 'https://mhamid.tours/static/media/gallery/337567526.jpg',
            title: 'Mushrooms',
            rows: 2,
            cols: 2,
        },
        {
            img: 'https://mhamid.tours/static/media/gallery/337567628.jpg',
            title: 'Tomato basil',
        },
        {
            img: 'https://mhamid.tours/static/media/gallery/337567718.jpg',
            title: 'Sea star',
        },
        {
            img: 'https://mhamid.tours/static/media/gallery/337567810.jpg',
            title: 'Bike',
            cols: 2,
        },
        {
            img: 'https://mhamid.tours/static/media/gallery/337567879.jpg',
            title: 'Breakfast',
            rows: 2,
            cols: 2,
        },
        {
            img: 'https://mhamid.tours/static/media/gallery/337567952.jpg',
            title: 'Burger',
        },
        {
            img: 'https://mhamid.tours/static/media/gallery/337568044.jpg',
            title: 'Camera',
        },
        {
            img: 'https://mhamid.tours/static/media/gallery/337568079.jpg',
            title: 'Coffee',
            cols: 2,
        },
        {
            img: 'https://mhamid.tours/static/media/gallery/337568107.jpg',
            title: 'Hats',
            cols: 2,
        },
        {
            img: 'https://mhamid.tours/static/media/gallery/337568121.jpg',
            title: 'Honey',
            author: '@arwinneil',
            rows: 2,
            cols: 2,
        },
        {
            img: 'https://mhamid.tours/static/media/gallery/337568156.jpg',
            title: 'Basketball',
        },
        {
            img: 'https://mhamid.tours/static/media/gallery/337568190.jpg',
            title: 'Fern',
        },
        {
            img: 'https://mhamid.tours/static/media/gallery/337568221.jpg',
            title: 'Mushrooms',
            rows: 2,
            cols: 2,
        },
        {
            img: 'https://mhamid.tours/static/media/gallery/337568259.jpg',
            title: 'Tomato basil',
        },
        {
            img: 'https://mhamid.tours/static/media/gallery/337568344.jpg',
            title: 'Sea star',
        },
        {
            img: 'https://mhamid.tours/static/media/gallery/337568460.jpg',
            title: 'Bike',
            cols: 2,
        },
        {
            img: 'https://mhamid.tours/static/media/gallery/337568550.jpg',
            title: 'Honey',
            author: '@arwinneil',
            rows: 2,
            cols: 2,
        },
        {
            img: 'https://mhamid.tours/static/media/gallery/337568620.jpg',
            title: 'Basketball',
        },
        {
            img: 'https://mhamid.tours/static/media/gallery/337568653.jpg',
            title: 'Fern',
        },
        {
            img: 'https://mhamid.tours/static/media/gallery/337568753.jpg',
            title: 'Mushrooms',
            rows: 2,
            cols: 2,
        },
        {
            img: 'https://mhamid.tours/static/media/gallery/337568792.jpg',
            title: 'Tomato basil',
        },
        {
            img: 'https://mhamid.tours/static/media/gallery/337568855.jpg',
            title: 'Sea star',
        },
        {
            img: 'https://mhamid.tours/static/media/gallery/337569026.jpg',
            title: 'Bike',
            cols: 2,
        },
        {
            img: 'https://mhamid.tours/static/media/gallery/337569127.jpg',
            title: 'Breakfast',
            rows: 2,
            cols: 2,
        },
        {
            img: 'https://mhamid.tours/static/media/gallery/337569226.jpg',
            title: 'Burger',
        },
        {
            img: 'https://mhamid.tours/static/media/gallery/337569281.jpg',
            title: 'Camera',
        },
        {
            img: 'https://mhamid.tours/static/media/gallery/337569328.jpg',
            title: 'Coffee',
            cols: 2,
        },
        {
            img: 'https://mhamid.tours/static/media/gallery/337569492.jpg',
            title: 'Hats',
            cols: 2,
        },
        {
            img: 'https://mhamid.tours/static/media/gallery/337569512.jpg',
            title: 'Honey',
            author: '@arwinneil',
            rows: 2,
            cols: 2,
        },
        {
            img: 'https://mhamid.tours/static/media/gallery/337569535.jpg',
            title: 'Basketball',
        },
        {
            img: 'https://mhamid.tours/static/media/gallery/337569617.jpg',
            title: 'Fern',
        },
        {
            img: 'https://mhamid.tours/static/media/gallery/337569925.jpg',
            title: 'Mushrooms',
            rows: 2,
            cols: 2,
        },
        {
            img: 'https://mhamid.tours/static/media/gallery/337570000.jpg',
            title: 'Tomato basil',
        },
        {
            img: 'https://mhamid.tours/static/media/gallery/337570045.jpg',
            title: 'Sea star',
        },
        {
            img: 'https://mhamid.tours/static/media/gallery/337570141.jpg',
            title: 'Bike',
            cols: 2,
        },
        {
            img: 'https://mhamid.tours/337570245.jpg',
            title: 'Basketball',
        },
        {
            img: 'https://mhamid.tours/static/media/gallery/337570324.jpg',
            title: 'Fern',
        },
    ];

    /*
242453090.jpg
337562076.jpg
337562303.jpg
337562357.jpg
337562404.jpg
337567323.jpg
337567458.jpg
337567485.jpg
337567526.jpg
337567628.jpg
337567718.jpg
337567810.jpg
337567879.jpg
337567952.jpg
337568044.jpg
337568079.jpg
337568107.jpg
337568121.jpg
337568156.jpg
337568190.jpg
337568221.jpg
337568259.jpg
337568344.jpg
337568460.jpg
337568550.jpg
337568620.jpg
337568653.jpg
337568753.jpg
337568792.jpg
337568855.jpg
337569026.jpg
337569127.jpg
337569226.jpg
337569281.jpg
337569328.jpg
337569492.jpg
337569512.jpg
337569535.jpg
337569617.jpg
337569925.jpg
337570000.jpg
337570045.jpg
337570141.jpg
337570245.jpg
337570324.jpg
     */


    const srcset = (image, size, rows = 1, cols = 1) => {
        return {
            src: `${image}?w=${size * cols}&h=${size * rows}&fit=crop&auto=format`,
            srcSet: `${image}?w=${size * cols}&h=${
                size * rows
            }&fit=crop&auto=format&dpr=2 2x`,
        };
    }


    return (
        <div className="lg:container my-10 p-4 mx-auto" id="gallery">
            <h1 className="font-bold text-4xl text-center  text-purple mb-4">Gallery</h1>
            <ImageList
                sx={{ height: 450 }}
                variant="quilted"
                cols={isMobileMode() ? 4 : 8}
                rowHeight={121}
            >
                {itemData.map((item) => (
                    <ImageListItem key={item.img} cols={item.cols || 1} rows={item.rows || 1}>
                        <img
                            {...srcset(item.img, 121, item.rows, item.cols)}
                            alt={item.title}
                            loading="lazy"
                        />
                    </ImageListItem>
                ))}
            </ImageList>
        </div>
    );
};

export default Gallery;