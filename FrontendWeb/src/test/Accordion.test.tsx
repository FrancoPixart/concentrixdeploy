import Accordion from '../components/accordion/Accordion'
import { fireEvent, render, screen } from '@testing-library/react'
import { beforeEach, describe, expect, test } from 'vitest'


describe('Accordion test', () => {

  // hook que se ejecuta antes de cada prueba
  beforeEach(() => {
    render(
      <Accordion
        img=''
        name='Franco Fernandez'
        subtitle='1234567'
      >
        <p>my data</p>
      </Accordion>
    )
  })

  test('should show the accordion component', () => {
    expect(screen.getByText('Franco Fernandez')).toBeDefined()
  })

  test('should show the name all time', () => {
    expect(screen.getByText('Franco Fernandez')).toBeDefined()
  })

  test('should not show the content at the start', () => {
    expect(screen.queryByText(/data/i)).toBeNull()
  })

  test('should show the content after click', () => {
    const button = screen.getByText(/open/i)
    fireEvent.click(button)
    expect(screen.getByText(/data/i)).toBeDefined()
  })

  test('should not show the content after click', () => {
    const button = screen.getByText(/close/i)
    fireEvent.click(button)
    expect(screen.queryByText(/data/i)).toBeNull()
  })
})
