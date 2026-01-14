import { Menu } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet'
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from '@/components/ui/navigation-menu'
import { Link, useLocation } from '@tanstack/react-router'

export const NavigationSheet = () => {
  const location = useLocation()

  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button
          variant="link"
          size="icon"
          aria-label={`Menu Button`}
          className="h-7"
        >
          <Menu />
        </Button>
      </SheetTrigger>
      <SheetContent>
        <NavigationMenu>
          <NavigationMenuList className="flex flex-col items-start gap-y-6">
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
                aria-current={
                  location.pathname === '/about' ? 'page' : undefined
                }
              >
                <Link to="/about">About</Link>
              </NavigationMenuLink>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
      </SheetContent>
    </Sheet>
  )
}
