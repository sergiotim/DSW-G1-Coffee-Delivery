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

type Props = {
  coffee: {
    id: string
    title: string
    description: string
    tags: string[]
    price: number
    image: string
  }
}

export function CoffeeCard({ coffee }: Props) {
  const theme = useTheme()

  function incrementQuantity() {
    // escrever sua lógica aqui
  }

  function decrementQuantity() {
    // escrever sua lógica aqui
  }

  function handleAddItem() {
    // escrever sua lógica aqui
  }

  return (
    <Container>
      <CoffeeImg src={"/images/coffees/expresso-cremoso.png"} alt={coffee.title} />

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
            quantity={20} // Aqui você pode passar a quantidade do café
            incrementQuantity={incrementQuantity} // Aqui você pode passar a função de incrementar
            decrementQuantity={decrementQuantity} // Aqui você pode passar a função de decrementar
          />

          <button onClick={handleAddItem}>
            <ShoppingCart size={22} color={theme.colors['base-card']} />
          </button>
        </Order>
      </Control>
    </Container>
  )
}
