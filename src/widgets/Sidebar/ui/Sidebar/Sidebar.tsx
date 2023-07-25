import { classNames } from 'shared/lib/classNames/classNames'
import cls from './Sidebar.module.scss'
import { useState } from 'react'
import { ThemeSwitcher } from 'widgets/ThemeSwitcher/ui/ThemeSwitcher'
import { LangSwitcher } from 'widgets/LangSwitcher/LangSwitcher'
import { Button } from 'shared/ui/Button/Button'

interface SidebarProps {
  className?: string
}

export const Sidebar = ({ className = '' }: SidebarProps): JSX.Element => {
  const [collapsed, setCollapsed] = useState<boolean>(false)

  const onToggle = (): void => {
    setCollapsed((prev) => !prev)
  }

  return (
      <div
          className={classNames(cls.Sidebar, { [cls.collapsed]: collapsed }, [
            className
          ])}
    >
          <Button onClick={onToggle}>toggle</Button>
          <div className={cls.switchers}>
              <ThemeSwitcher />
              <LangSwitcher className={cls.lang} />
          </div>
      </div>
  )
}
