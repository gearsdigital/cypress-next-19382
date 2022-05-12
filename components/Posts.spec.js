/// <reference types="cypress" />
import { mount } from '@cypress/react'
import {Posts} from "./Posts";
import { locators } from './Posts.locators'

const posts = [
  {
    id: 1,
    title: 'Introduction to Cypress',
  },
  {
    id: 2,
    title: 'Introduction to Next.js',
  },
]

describe('<Posts />', () => {
  it('renders post title', () => {
    mount(<Posts posts={posts} />)
    cy.get("[data-testid]").should('have.length', posts.length)
  })
})
