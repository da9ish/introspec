import type { ApolloError } from '@apollo/client'
import { styled } from '@stitches/react'

import get from 'lodash/get'

import Flex from 'components/Flex'
import Icon from 'components/Icon'
import IconButton from 'components/IconButton'
import Separator from 'components/Separator'
import Text from 'components/Text'
import type { IconProps } from 'components/Icon'

interface Content {
  title: string,
  subtitle?: string,
  icon?: IconProps['name']
}

interface Action<T = any> {
  name: string,
  icon: string,
  onClick?: (record: T, e: React.FormEvent<any>) => void
}

interface Props<T> {
  data: any,
  loading: boolean,
  error?: ApolloError,
  contents: Content,
  actions?: Action<T>[]
}

const ListItem = styled(Flex, {
  transition: 'all 0.1s ease',

  height: '44px',
  boxSizing: 'border-box',
  borderBottom: '1px solid $bgBorder',
  alignItems: 'center',
  justifyContent: 'space-between',
  padding: '8px 24px 8px 36px',

  '&:hover': {
    backgroundColor: '$bgBorderHover'
  }
})

const ListTitle = styled(Text, {

})

const ListContent = styled(Flex, {
  gap: 8
})

const ActionContainer = styled(Flex, {
  gap: 8,
  alignSelf: 'stretch'
})

function List<T>({ data = [], loading, error, contents, actions = [] }: Props<T>) {
  return (
    <Flex direction="column">
      {loading && <Text>Loading...</Text>}
      {error && <Text>Error: {error.message}</Text>}
      {data.length === 0 && <Text>No Records</Text>}
      {data.map((d: any) => {
        const title = get(d, contents.title)
        const subtitle = get(d, contents?.subtitle || '')
        const icon = get(d, contents?.icon || '')
        return (
          <ListItem key={title}>
            <ListContent>
              {icon && <Icon name={icon} />}
              <ListTitle fontWeight={500}>{title}</ListTitle>
              <Separator orientation="vertical" />
              <ListTitle>{subtitle}</ListTitle>
            </ListContent>
            {actions.length > 0 && (
            <ActionContainer>
              <Separator orientation="vertical" />
                {actions.map((action) => (
                  <IconButton
                    key={action.name}
                    name={action.icon}
                    onClick={(e) => action.onClick?.(d, e)}
                  />
                ))}
            </ActionContainer>
            )}
          </ListItem>
        )
      })}
    </Flex>
  )
}

export default List
