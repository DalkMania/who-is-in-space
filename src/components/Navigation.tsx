import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from '@/components/ui/navigation-menu'
import { Link, useLocation } from '@tanstack/react-router'
import { NavigationSheet } from './NavigationSheet'

export const Navigation = () => {
  const location = useLocation()

  return (
    <>
      <NavigationMenu>
        <NavigationMenuList className="gap-x-8 hidden lg:flex">
          <NavigationMenuItem>
            <NavigationMenuLink
              asChild
              aria-current={
                location.pathname.includes('/articles') ? 'page' : undefined
              }
            >
              <Link to="/articles/{-$page}">Articles</Link>
            </NavigationMenuLink>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <NavigationMenuLink
              asChild
              aria-current={
                location.pathname === '/iss-information' ? 'page' : undefined
              }
            >
              <Link to="/iss-information">ISS Information</Link>
            </NavigationMenuLink>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <NavigationMenuLink
              asChild
              aria-current={
                location.pathname.includes('/crew') ? 'page' : undefined
              }
            >
              <Link to="/crew">Crew</Link>
            </NavigationMenuLink>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <NavigationMenuLink
              asChild
              aria-current={location.pathname === '/about' ? 'page' : undefined}
            >
              <Link to="/about">About</Link>
            </NavigationMenuLink>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>
      <div className="lg:hidden">
        <NavigationSheet />
      </div>
    </>
  )
}
