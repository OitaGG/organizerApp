import React from 'react';
import {Card} from "../../components";
import ButtonLink from "../../components/Link";
import { Carousel } from 'antd';
import "./Start.less"
import {Header} from "../../modules";
const Start = () => {
    return (
        <section className="start">
            <Header/>
            <Card
                img="../../../public/img/card-1.svg"
                title="Работа с командой"
                description="Помогает организовывать команды на работе, во время параллельного проекта или семейных выходных."
            ><ButtonLink to="/registration">Начать работу</ButtonLink></Card>
            <Card
                img="../../../public/img/card-2.svg"
                title="Вся информация в наглядном виде"
                description="Добавляйте подробную информацию, например комментарии, вложения, сроки и другие сведения, прямо в карточки Trello. Работайте над проектами вместе с коллегами от начала и до конца."
                reverse
            />
            <Card
                img="../../../public/img/card-3.svg"
                title="Встроенная автоматизация рабочих процессов с помощью улучшения Butler"
                description="Делегируйте задания роботам! Если вы хотите повысить продуктивность своей команды, автоматизируйте рабочие процессы с помощью улучшения Butler, а монотонную работу смогут выполнить наши мощные инструменты."
            />
            <div className="start__instructuons">
                <div className="instructions__decription">
                    <h2>Как это работает?</h2>
                    <p>Наш сервис легко и удобно использовать! Минималистичный интерфейс и интуитивно понятное меню</p>
                </div>
                <div className="instructions__slider">
                    <Carousel autoplay >
                        <div className="slide">
                            <img src="../../../public/img/card-1.svg"/>
                            <p>Здесь какой-то текст, где мы объясняем что-то</p>
                        </div>
                        <div className="slide">
                            <img src="../../../public/img/card-2.svg"/>
                            <p>Здесь какой-то текст, где мы объясняем что-то</p>
                        </div>
                        <div className="slide">
                            <img src="../../../public/img/card-3.svg"/>
                            <p>Здесь какой-то текст, где мы объясняем что-то</p>
                        </div>
                    </Carousel>
                </div>
            </div>
        </section>
    );
};

export default Start;