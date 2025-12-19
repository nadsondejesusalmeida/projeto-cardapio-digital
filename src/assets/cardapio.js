import rolledMignonImage from "./dishes/enroladinho-mignon.jpeg";
import couple20Image from "./dishes/casal-20.jpeg";
import picanhaBurgerImage from "./dishes/burguer-picanha.jpeg";
import fishAndChipsImage from "./dishes/fish-chips.jpeg";
import truffleShrimpRisottoImage from "./dishes/risoto-camarao-trufado.jpeg";

import brownieImage from "./desserts/brownie.jpeg";
import bakedCoconutImage from "./desserts/cocada-forno.jpeg";
import petitGateauImage from "./desserts/petit-gateau.jpeg";

import stillWaterImage from "./drinks/agua-sem-gas.jpeg";
import sparklingWaterImage from "./drinks/agua-com-gas.jpeg";
import cocaColaImage from "./drinks/coca-cola.jpeg";
import guaranaImage from "./drinks/guarana.jpeg";
import heinekenImage from "./drinks/heineken.jpeg";

const rolledMignon = {
  name: "Enroladinho de Mignon",
  price: "R$ 64,90",
  image: rolledMignonImage,
  description: "Finíssimas fatias de filé mignon enroladas no parmesão",
};

const couple20 = {
  name: "Casal 20",
  price: "R$ 29,00",
  image: couple20Image,
  description: "Casal perfeito pão de alho caseiro e linguiça toscana grill",
};

const picanhaBurger = {
  name: "Burguer de Picanha",
  price: "R$ 44,90",
  image: picanhaBurgerImage,
  description:
    "Burguer de Picanha Angus, Queijo Cheddar, Crisp de Cebola e Geléia de Bacon",
};

const fishAndChips = {
  name: "Fish and Chips",
  price: "R$ 79,90",
  image: fishAndChipsImage,
  description:
    "Iscas de Peixe Empanada na Farinha Panko e Flocos de Milho e Batata Frita Palito",
};

const truffleShrimpRisotto = {
  name: "Risoto de Camarão Trufado",
  price: "R$ 72,90",
  image: truffleShrimpRisottoImage,
  description:
    "Arroz Arbóreo, camarões salteados no azeite trufado e crocantes de panko",
};

const brownie = {
  name: "Brownie",
  price: "R$ 32,90",
  image: brownieImage,
  description:
    "Delicioso brownie caseiro, sorvete de creme, calda quente de chocolate",
};

const bakedCoconut = {
  name: "Cocada de Forno",
  price: "R$ 32,90",
  image: bakedCoconutImage,
  description:
    "Cremosa cocada de coco torrado, doce de leite argentino e sorvete de creme",
};

const petitGateau = {
  name: "Petit Gateau",
  price: "R$ 34,90",
  image: petitGateauImage,
  description:
    "Bolo quente recheado com ganache de chocolate, leite condensado e castanha de caju",
};

const stillWater = {
  name: "Água sem gás",
  price: "R$ 6,90",
  image: stillWaterImage,
  description: "310ml",
};

const sparklingWater = {
  name: "Água com gás",
  price: "R$ 7,90",
  image: sparklingWaterImage,
  description: "310ml",
};

const cocaCola = {
  name: "Coca-Cola",
  price: "R$ 7,90",
  image: cocaColaImage,
  description: "290ml",
};

const guarana = {
  name: "Guaraná Antártica",
  price: "R$ 7,90",
  image: guaranaImage,
  description: "350ml",
};

const heineken = {
  name: "Heineken",
  price: "R$ 15,90",
  image: heinekenImage,
  description: "355ml",
};

export const mainDishes = [
  picanhaBurger,
  rolledMignon,
  couple20,
  fishAndChips,
  truffleShrimpRisotto,
];

export const desserts = [
	brownie,
	bakedCoconut,
	petitGateau
];

export const drinks = [
	stillWater,
	sparklingWater,
	cocaCola,
	guarana,
	heineken
];