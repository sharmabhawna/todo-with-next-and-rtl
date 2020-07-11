import React from 'react'
import { render } from '@testing-library/react'
import Home from "../../src/pages";

const todos = [
  {
    id: 1,
    title: "::TO_DO TITLE::",
    description: "::TO_DO DESCRIPTION::",
    tasks: [
      {
        id: 1,
        title: "::TASK TITLE::",
        isDone: false
      }
    ]
  }
]

describe('Page - Home', () => {

  it('should render add icon', () => {
    const { getByText } = render(<Home todos={todos} />)
    expect(getByText('+')).toBeInTheDocument()
  })

  it('should render brief todo cards for given todos', () => {
    const { getAllByTestId } = render(<Home todos={todos} />)
    expect(getAllByTestId('todo-brief').length).toBe(1)
  })
});