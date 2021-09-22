import React from "react";
import "./Catalogue.scss";
import "../cart/Cart.scss";
import cart from "../../images/cart/cart-1.jpg";
import Rating from '@material-ui/lab/Rating';
import { makeStyles } from '@material-ui/core/styles';
import Reminder from "../reminder/Reminder";
import CatalogueList from "./CatalogueList";
import Select from 'react-select';

const Filter = () => {
    const options = [
        { value: 'rating', label: 'По популярности', color: '#273566' },
        { value: 'rating', label: 'По популярности2', color: '#273566' },
        { value: 'rating', label: 'По популярности3', color: '#273566' }
    ]
    const optionsReg = [
        { value: 'almaty', label: 'Алматы' },
        { value: 'astana', label: 'Астана' },
    ]
    return (
        <div className="filter-wrapper">
            <div className="filter-title">Фильтр</div>
            <div className="filter-sortname">Сортировка</div>
            <Select options={options} placeholder={<div className="filter-placeholder" menuIsOpen={true}>По популярности</div>} />
            <div className="filter-sortname">Регион</div>
            <Select options={optionsReg} placeholder={<div className="filter-placeholder" menuIsOpen={true}>Алматы</div>} />
            <div className="filter-sortname">Цена</div>
            <input className="filter-input" placeholder="От"></input>
            <input className="filter-input" placeholder="До"></input>
            <div className="filter-btn">Применить</div>
        </div>
    );
}
const ServiceList = () => {
    const carts = [
        {
            id: 1,
            img: cart,
            imgDesc: "Product",
            serviceName: "AST Service",
            title: "Услуги эвакуатора",
            rating: 2.5,
            cost: 1000
        },
        {
            id: 2,
            img: cart,
            imgDesc: "Product",
            serviceName: "AST Service",
            title: "Услуги эвакуатора",
            rating: 3,
            cost: 1000
        },
        {
            id: 3,
            img: cart,
            imgDesc: "Product",
            serviceName: "AST Service",
            title: "Услуги эвакуатора",
            rating: 1,
            cost: 1000
        },
        {
            id: 4,
            img: cart,
            imgDesc: "Product",
            serviceName: "AST Service",
            title: "Услуги эвакуатора",
            rating: 5,
            cost: 1000
        },
        {
            id: 5,
            img: cart,
            imgDesc: "Product",
            serviceName: "AST Service",
            title: "Услуги эвакуатора",
            rating: 3,
            cost: 1000
        },
        {
            id: 6,
            img: cart,
            imgDesc: "Product",
            serviceName: "AST Service",
            title: "Услуги эвакуатора",
            rating: 3,
            cost: 1000
        },
        {
            id: 7,
            img: cart,
            imgDesc: "Product",
            serviceName: "AST Service",
            title: "Услуги эвакуатора",
            rating: 3,
            cost: 1000
        },
        {
            id: 8,
            img: cart,
            imgDesc: "Product",
            serviceName: "AST Service",
            title: "Услуги эвакуатора",
            rating: 3,
            cost: 1000
        },
        // {
        //     id: 9,
        //     img: cart,
        //     imgDesc: "Product",
        //     serviceName: "AST Service",
        //     title: "Услуги эвакуатора",
        //     rating: 3,
        //     cost: 1000
        // },
    ];
    const useStyles = makeStyles((theme) => ({
        root: {
          display: 'flex',
          flexDirection: 'column',
          '& > * + *': {
            marginTop: theme.spacing(1),
          },
        },
    }));
    const classes = useStyles();
    return (
        <div className="service-wrapper">
            <div className="container">
                <div className="catalogue-content-title">Найдено всего <span>2 345</span> услуг</div>
                <div className="service-content">
                    {carts.map((item) => {
                        console.log(item.img)
                        return (
                            <div className="service-item cart-item">
                                <a style={{ textDecoration: 'none', color: "inherit" }} href={`/catalogue:${item.id}`}>
                                <div className="cart-item__img">
                                    <img src={ item.img }></img>
                                </div>
                                <div className="cart-item__content">
                                    <div className="cart-item__service-name">{ item.serviceName }</div>
                                    <div className="cart-item__title">{item.title}</div>
                                    <div className="cart-item__rating">
                                        <div className={classes.root}>
                                            <Rating
                                                name="half-rating"
                                                defaultValue={item.rating}
                                                precision={0.5}
                                                readOnly
                                            />
                                        </div>
                                        <span className="rate">( { item.rating } / 5 )</span>
                                    </div>
                                    <div className="cart-item__cost">{ item.cost } ₸</div>
                                    <a className="cart-item__btn-link" href={`/catalogue:${item.id}`}>
                                        <div className="cart-item__btn">
                                            Подробнее
                                            <div className="cart-item__btn-icon"></div>
                                        </div>
                                    </a>
                                </div>
                                </a>
                            </div>
                            
                        );
                    })}
                </div>
                <div className="cart-item__navigation">
                    <div className="cart-item__navigation-arrow cart-item__navigation-arrow--prev"></div>
                        <div className="cart-item__navigation-nums">
                            <span>1</span>
                            <span className="cart-item__navigation-nums--active">2</span>
                            <span>3</span>
                        </div>
                    <div className="cart-item__navigation-arrow cart-item__navigation-arrow--next"></div>
                </div>
            </div>
        </div>
    );
}

const Catalogue = () => {
    return (
        <div className="catalogue-wrapper">
            <CatalogueList />
            <div className="container">
                <div className="catalogue-content">
                    <Filter />
                    <ServiceList />
                </div>
                <Reminder />
            </div>
            
        </div>
    );
}

export default Catalogue;