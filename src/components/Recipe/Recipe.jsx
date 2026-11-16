import Modal from '@components/Modal/Modal'
import RecipeModal from '@pages/home/Recipes/RecipeModal'

export default function Recipe({ children, recipe, toggle, handleToggle }) {
  return (
    <>
      {children}
      {toggle && <Modal handleToggle={handleToggle}><RecipeModal recipe={recipe} /></Modal>}
    </>
  )
}
