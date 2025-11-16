interface RegisterOptions {
  singleton?: boolean
  overwrite?: boolean
}

export default class Container {
  private dependencies = new Map<string, () => unknown>()
  private singletons = new Map<string, unknown>()

  register(
    key: string,
    factory: () => unknown,
    options: RegisterOptions = { singleton: true, overwrite: false },
  ): void {
    if (this.dependencies.has(key) && !options.overwrite) {
      return
    }
    this.dependencies.set(key, factory)
    if (options.singleton) {
      const instance = factory()
      this.singletons.set(key, instance)
    } else {
      this.singletons.delete(key)
    }
  }

  resolve<T = unknown>(key: string): T {
    if (this.singletons.has(key)) {
      return this.singletons.get(key)! as T
    }

    const factory = this.dependencies.get(key)
    if (!factory) {
      throw new Error(`Dependency "${String(key)}" is not registered.`)
    }

    const instance = factory() as T
    return instance
  }
}
