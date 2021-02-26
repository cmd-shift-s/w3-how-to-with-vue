export * from '@vue/test-utils'

// export const renderer = require('vue-server-renderer').createRenderer()

/**
 * Jest expect extends
 */
expect.extend({

  /**
   * toContains
   * 배열 안에 배열이 있는지 확인
   */
  toContains(received, argument) {
    // expect array containing
    // 실패하면 함수를 빠져나감
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    argument.forEach((item: any) => expect(received).toContain(item))

    // 여기는 무조건 성공만 실행됨
    return {
      message: () => 'success',
      pass: true
    }
  }
})
