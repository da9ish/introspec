import get from 'lodash/get'
import { styled } from '@stitches/react'
import type { ApolloError } from '@apollo/client'

import Flex from 'components/Flex'
import Icon from 'components/Icon'
import IconButton from 'components/IconButton'
import Separator from 'components/Separator'
import Text from 'components/Text'
import Skeleton from 'components/Skeleton'
import BlankState from 'components/BlankState'
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
  alignSelf: 'stretch',
  padding: '8px 24px 8px 36px',
  flexGrow: 1,

  '&:hover': {
    backgroundColor: '$bgBorderHover'
  }
})

const ListTitle = styled(Text, {
  alignItems: 'center',
  alignSelf: 'stretch'
})

const ListContent = styled(Flex, {
  flexGrow: 1,
  gap: 8
})

const ActionContainer = styled(Flex, {
  gap: 8,
  alignSelf: 'stretch'
})

function List<T>({ data = [], loading, error, contents, actions = [] }: Props<T>) {
  return (
    <Flex direction="column">
      {loading && Array.from(Array(5)).map((el, idx) => (
        // eslint-disable-next-line react/no-array-index-key
        <ListItem key={`${el}-${idx}`}>
          <ListContent>
            <ListTitle><Skeleton css={{ width: 50 }} /></ListTitle>
            <Separator orientation="vertical" />
            <ListTitle><Skeleton css={{ width: 50 }} /></ListTitle>
          </ListContent>
        </ListItem>
      ))}
      {error && <Text>Error: {error.message}</Text>}
      {data?.length === 0 && <BlankState heading="No records" />}
      {data?.map((d: any) => {
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
