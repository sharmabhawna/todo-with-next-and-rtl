import React from 'react'
import { render } from '@testing-library/react'
import TodoBrief from "../../src/components/TodoBrief";
import { useRouter } from "next/router";
import { fireEvent } from "@testing-library/dom";

const todo = {
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

jest.mock('next/router')
describe('Component - TodoBrief', () => {
  const mockPush = jest.fn()

  beforeEach(() => {
    useRouter.mockImplementationOnce(() => ({ push: mockPush }))
  })

  it('should render brief todo card', () => {
    const { getByTestId } = render(<TodoBrief todo={todo} />)
    expect(getByTestId('todo-brief')).toBeInTheDocument()
  })

  it('should render todo title, description and number of all tasks, done and pending tasks', () => {
    const { getByText } = render(<TodoBrief todo={todo} />)
    expect(getByText('::TO_DO TITLE::')).toBeInTheDocument()
    expect(getByText('::TO_DO DESCRIPTION::')).toBeInTheDocument()
    expect(getByText('Total: 1')).toBeInTheDocument()
    expect(getByText('Done: 0')).toBeInTheDocument()
    expect(getByText('Pending: 1')).toBeInTheDocument()
  })

  it('should navigate to todo page when clicked', () => {
    const { getByTestId } = render(<TodoBrief todo={todo} />)
    let todoCard = getByTestId('todo-brief')
    fireEvent.click(todoCard)
    expect(mockPush).toHaveBeenCalledWith('/[todo]', '/1')
  })
});