import {} from 'react'

// eslint-disable-next-line react/prop-types
const Title = ({ children, className }) => {
  return <div className={`mb-2 text-center text-3xl font-bold ${className}`}>{children}</div>
}
export default Title
