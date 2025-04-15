import { ShoppingCart, Heart, HeartStraight, HeartBreak, HeartHalf  } from '@phosphor-icons/react'
import { useTheme } from 'styled-components'

import { QuantityInput } from '../Form/QuantityInput'
import {
  CoffeeImg,
  Container,
  Control,
  Description,
  Order,
  Price,
  Tags,
  Title,
} from './styles'

type CoffeeCardProps = {
  coffee: {
    id: string;
    title: string;
    description: string;
    tags: string[];
    price: number;
    image: string;
    quantity: number
    favorite: boolean;
  },
  incrementQuantity: (id: string) => void
  decrementQuantity: (id: string) => void
  handleFavoriteCoffee: (id: string) => void
}

export function CoffeeCard({ coffee, incrementQuantity, decrementQuantity, handleFavoriteCoffee }: CoffeeCardProps) {
  const theme = useTheme();

  return (
    <Container>
      <CoffeeImg src={"/images/coffees/expresso-cremoso.png"} alt="Expresso Tradicional" />

      <Tags>
        {/** Aqui você pode mapear os tags do café */ }
        {coffee.tags.map((tag) => <span key={tag}>{tag}</span>)}
      </Tags>

      <Title>{coffee.title}</Title>

      <Description>{coffee.description}</Description>

      <Control>
        <Price>
          <span>R$</span>
          <span>{coffee.price.toFixed(2)}</span> {/** Aqui você pode passar o preço do café */}
        </Price>

        <Order $itemAdded={false}>
          <QuantityInput
            quantity={coffee.quantity } // Aqui você pode passar a quantidade do café
            incrementQuantity={() => incrementQuantity(coffee.id)} // Aqui você pode passar a função de incrementar
            decrementQuantity={() => decrementQuantity(coffee.id)} // Aqui você pode passar a função de decrementar
          />

          <button onClick={() => handleFavoriteCoffee(coffee.id)}>
            <Heart size={22}  color={!coffee.favorite ? theme.colors['base-card'] : "red"} />
          </button>
        </Order>
      </Control>
    </Container>
  )
}
