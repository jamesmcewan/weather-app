import { render } from '@testing-library/react'
import Weather from '../components/Weather'

describe('Weather', () => {
  it('should render', () => {
    const { getByText } = render(<Weather main="test main" description="test description" />)
    expect(getByText(/test main/i)).toBeInTheDocument()
    expect(getByText(/test description/i)).toBeInTheDocument()
  })
})