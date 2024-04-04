import React from "react";

function Options(props) {
  return (
    <div className="options-container">
      <p className="options-container__title">ЛЕВЫЙ РУКАВ</p>
      <div className="options-container__item_left">
        Температура вертикальной грелки
        <div>{props.verticalLeft}</div>
        <div>Температура горизонтальной грелки</div>
        <div>{props.horizontalLeft}</div>
        <div>Длина пакета</div>
        <div>{props.packetLengthLeft}</div>
        <div>Время сварки</div>
        <div>{props.weldingTimeLeft}</div>
        <div>Протяжка пленки</div>
        <div>{props.stretchOutLeft}</div>
        <div>Задержка старта</div>
        <div>{props.startDelayLeft}</div>
        <div>Задержка по фотометке</div>
        <div>{props.photoDelayLeft}</div>
      </div>
      <p className="options-container__title">ПРАВЫЙ РУКАВ</p>
      <div className="options-container__item_right">
        Температура вертикальной грелки
        <div>{props.verticalRight}</div>
        <div>Температура горизонтальной грелки</div>
        <div>{props.horizontalRight}</div>
        <div>Длина пакета</div>
        <div>{props.packetLengthRight}</div>
        <div>Время сварки</div>
        <div>{props.weldingTimeRight}</div>
        <div>Протяжка пленки</div>
        <div>{props.stretchOutRight}</div>
        <div>Задержка старта</div>
        <div>{props.startDelayRight}</div>
        <div>Задержка по фотометке</div>
        <div>{props.photoDelayRight}</div>
      </div>
    </div>
  );
}

export default Options;
