import React from 'react';
import {ImageList, ImageListItem} from "@mui/material";
import {isMobileMode} from "../utils/lib";
import img242453090 from "../images/gallery/242453090.jpg"
import img337562076 from "../images/gallery/337562076.jpg"
import img337562303 from "../images/gallery/337562303.jpg"
import img337562357 from "../images/gallery/337562357.jpg"
import img337562404 from "../images/gallery/337562404.jpg"
import img337567323 from "../images/gallery/337567323.jpg"
import img337567458 from "../images/gallery/337567458.jpg"
import img337567485 from "../images/gallery/337567485.jpg"
import img337567526 from "../images/gallery/337567526.jpg"
import img337567628 from "../images/gallery/337567628.jpg"
import img337567718 from "../images/gallery/337567718.jpg"
import img337567810 from "../images/gallery/337567810.jpg"
import img337567879 from "../images/gallery/337567879.jpg"
import img337567952 from "../images/gallery/337567952.jpg"
import img337568044 from "../images/gallery/337568044.jpg"
import img337568079 from "../images/gallery/337568079.jpg"
import img337568107 from "../images/gallery/337568107.jpg"
import img337568121 from "../images/gallery/337568121.jpg"
import img337568156 from "../images/gallery/337568156.jpg"
import img337568190 from "../images/gallery/337568190.jpg"
import img337568221 from "../images/gallery/337568221.jpg"
import img337568259 from "../images/gallery/337568259.jpg"
import img337568344 from "../images/gallery/337568344.jpg"
import img337568460 from "../images/gallery/337568460.jpg"
import img337568550 from "../images/gallery/337568550.jpg"
import img337568620 from "../images/gallery/337568620.jpg"
import img337568653 from "../images/gallery/337568653.jpg"
import img337568753 from "../images/gallery/337568753.jpg"
import img337568792 from "../images/gallery/337568792.jpg"
import img337568855 from "../images/gallery/337568855.jpg"
import img337569026 from "../images/gallery/337569026.jpg"
import img337569127 from "../images/gallery/337569127.jpg"
import img337569226 from "../images/gallery/337569226.jpg"
import img337569281 from "../images/gallery/337569281.jpg"
import img337569328 from "../images/gallery/337569328.jpg"
import img337569492 from "../images/gallery/337569492.jpg"
import img337569512 from "../images/gallery/337569512.jpg"
import img337569535 from "../images/gallery/337569535.jpg"
import img337569617 from "../images/gallery/337569617.jpg"
import img337569925 from "../images/gallery/337569925.jpg"
import img337570000 from "../images/gallery/337570000.jpg"
import img337570045 from "../images/gallery/337570045.jpg"
import img337570141 from "../images/gallery/337570141.jpg"
import img337570245 from "../images/gallery/337570245.jpg"
import img337570324 from "../images/gallery/337570324.jpg"

const Gallery = () => {

    const itemData = [
        {
            img: img242453090,
            title: 'Breakfast',
            rows: 2,
            cols: 2,
        },
        {
            img: img337562076,
            title: 'Burger',
        },
        {
            img: img337562303,
            title: 'Camera',
        },
        {
            img: img337562357,
            title: 'Coffee',
            cols: 2,
        },
        {
            img: img337562404,
            title: 'Hats',
            cols: 2,
        },
        {
            img: img337567323,
            title: 'Honey',
            author: '@arwinneil',
            rows: 2,
            cols: 2,
        },
        {
            img: img337567458,
            title: 'Basketball',
        },
        {
            img: img337567485,
            title: 'Fern',
        },
        {
            img: img337567526,
            title: 'Mushrooms',
            rows: 2,
            cols: 2,
        },
        {
            img: img337567628,
            title: 'Tomato basil',
        },
        {
            img: img337567718,
            title: 'Sea star',
        },
        {
            img: img337567810,
            title: 'Bike',
            cols: 2,
        },
        {
            img: img337567879,
            title: 'Breakfast',
            rows: 2,
            cols: 2,
        },
        {
            img: img337567952,
            title: 'Burger',
        },
        {
            img: img337568044,
            title: 'Camera',
        },
        {
            img: img337568079,
            title: 'Coffee',
            cols: 2,
        },
        {
            img: img337568107,
            title: 'Hats',
            cols: 2,
        },
        {
            img: img337568121,
            title: 'Honey',
            author: '@arwinneil',
            rows: 2,
            cols: 2,
        },
        {
            img: img337568156,
            title: 'Basketball',
        },
        {
            img: img337568190,
            title: 'Fern',
        },
        {
            img: img337568221,
            title: 'Mushrooms',
            rows: 2,
            cols: 2,
        },
        {
            img: img337568259,
            title: 'Tomato basil',
        },
        {
            img: img337568344,
            title: 'Sea star',
        },
        {
            img: img337568460,
            title: 'Bike',
            cols: 2,
        },
        {
            img: img337568550,
            title: 'Honey',
            author: '@arwinneil',
            rows: 2,
            cols: 2,
        },
        {
            img: img337568620,
            title: 'Basketball',
        },
        {
            img: img337568653,
            title: 'Fern',
        },
        {
            img: img337568753,
            title: 'Mushrooms',
            rows: 2,
            cols: 2,
        },
        {
            img: img337568792,
            title: 'Tomato basil',
        },
        {
            img: img337568855,
            title: 'Sea star',
        },
        {
            img: img337569026,
            title: 'Bike',
            cols: 2,
        },
        {
            img: img337569127,
            title: 'Breakfast',
            rows: 2,
            cols: 2,
        },
        {
            img: img337569226,
            title: 'Burger',
        },
        {
            img: img337569281,
            title: 'Camera',
        },
        {
            img: img337569328,
            title: 'Coffee',
            cols: 2,
        },
        {
            img: img337569492,
            title: 'Hats',
            cols: 2,
        },
        {
            img: img337569512,
            title: 'Honey',
            author: '@arwinneil',
            rows: 2,
            cols: 2,
        },
        {
            img: img337569535,
            title: 'Basketball',
        },
        {
            img: img337569617,
            title: 'Fern',
        },
        {
            img: img337569925,
            title: 'Mushrooms',
            rows: 2,
            cols: 2,
        },
        {
            img: img337570000,
            title: 'Tomato basil',
        },
        {
            img: img337570045,
            title: 'Sea star',
        },
        {
            img: img337570141,
            title: 'Bike',
            cols: 2,
        },
        {
            img: img337570245,
            title: 'Fern',
        },
        {
            img: img337570324,
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