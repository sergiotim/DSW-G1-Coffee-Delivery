import { ShoppingCart } from '@phosphor-icons/react'
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
  },
  incrementQuantity: (id: string) => void
  decrementQuantity: (id: string) => void
}

export function CoffeeCard({ }: CoffeeCardProps) {
  const theme = useTheme();

  function handleAddItem() {
    console.log('Adicionar item ao carrinho')
    return;
  }

  return (
    <Container>
      <CoffeeImg src={"/images/coffees/expresso-cremoso.png"} alt="Expresso Tradicional" />

      <Tags>
        {/** Aqui você pode mapear os tags do café */ }
        <span key={'Tradicional'}>Tradicional</span>
        <span key={'Comum'}>Comum</span>
      </Tags>

      <Title>Expresso Tradicional</Title>

      <Description>Café expresso tradicional com espuma cremosa</Description>

      <Control>
        <Price>
          <span>R$</span>
          <span>{4.90.toFixed(2)}</span> {/** Aqui você pode passar o preço do café */}
        </Price>

        <Order $itemAdded={false}>
          <QuantityInput
            quantity={5} // Aqui você pode passar a quantidade do café
            incrementQuantity={() => {}} // Aqui você pode passar a função de incrementar
            decrementQuantity={() => {}} // Aqui você pode passar a função de decrementar
          />

          <button onClick={handleAddItem}>
            <ShoppingCart size={22} color={theme.colors['base-card']} />
          </button>
        </Order>
      </Control>
    </Container>
  )
}
