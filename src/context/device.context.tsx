import { createContext, useCallback, useEffect, useState } from 'react'

interface IDeviceContext {
  isMobile?: boolean
  isTablet?: boolean
}

interface DeviceContextProviderProps extends IDeviceContext {
  children: React.ReactNode
}

export const DeviceContext = createContext<IDeviceContext>({
  isMobile: false,
  isTablet: false
})

export function DeviceContextProvider(props: DeviceContextProviderProps): JSX.Element {
  const { children, isMobile: isMobileSSR } = props

  const [isMobile, setIsMobile] = useState(isMobileSSR)
  const [isTablet, setIsTablet] = useState(false)

  useEffect(() => {
    setIsMobile(isMobileSSR)
  }, [isMobileSSR])

  const handleResize = useCallback(() => {
    if (window.innerWidth < 992) {
      setIsMobile(true)
    } else setIsMobile(false)
  }, [])

  const handleSizeForTablet = useCallback(() => {
    if (window.innerWidth > 768 && window.innerWidth < 1024) {
      setIsTablet(true)
    } else setIsTablet(false)
  }, [])

  useEffect(() => {
    handleResize()
    window.addEventListener('resize', handleResize)
    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, [handleResize])

  useEffect(() => {
    handleSizeForTablet()
    window.addEventListener('resize', handleSizeForTablet)
    return () => {
      window.removeEventListener('resize', handleSizeForTablet)
    }
  }, [handleSizeForTablet])

  return (
    <DeviceContext.Provider
      value={{
        isMobile,
        isTablet
      }}
    >
      {children}
    </DeviceContext.Provider>
  )
}
