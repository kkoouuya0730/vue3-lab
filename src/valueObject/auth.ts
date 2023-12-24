class NoEmptyStringValue {
  readonly value: string

  constructor(value: string) {
    this.validation(value)
    this.value = value
  }

  // TODO msgを持つエラーオブジェクト的なものを作ってエラーメッセージを持てるようにしたい
  /**
   * バリデーションを実行する関数
   * @param {string} value
   */
  private validation(value: string): void {
    let isValid = false
    // validation1. 空文字でない
    isValid = value === '' ? true : false
    // validation2. 空文字が含まれていない
    isValid = value.includes('')
    // vllidation3. 1文字以上
    isValid = value.length <= 0 ? true : false

    if (isValid) {
      throw new Error('validation failed')
    }
  }
}

export class Email extends NoEmptyStringValue {
  email: string

  constructor(email: string) {
    super(email)
    this.emailValidation(email)
    this.email = email
  }

  /**
   * emailのビジネスロジックバリデーション
   * @param email
   */
  private emailValidation(email: string) {
    // validation1. @が含まれているか
    let isValid = false
    isValid = !email.includes('@')

    if (isValid) {
      throw new Error('emailValidation failed')
    }
  }
}

export class Password extends NoEmptyStringValue {
  password: string

  constructor(password: string) {
    super(password)
    this.passwordValidation(password)
    this.password = password
  }

  /**
   * passwordのビジネスロジックバリデーション
   * @param password
   */
  private passwordValidation(password: string) {
    // validation1. 8文字以上
    let isValid = false
    isValid = password.length < 8 ? true : false

    if (isValid) {
      throw new Error('passwordValidation failed')
    }
  }
}
