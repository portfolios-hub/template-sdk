import { describe, expect, it } from 'vitest'
import { SDK_NAME } from '../src/index'

describe('template-sdk setup', () => {
  it('exports the SDK name', () => {
    expect(SDK_NAME).toBe('@portfolios-hub/template-sdk')
  })
})
