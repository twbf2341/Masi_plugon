#  Start

This project is packaged using webpack:

```
npm run compile
```


```
npm run start
```

## API List

Add right-hand control bar

```typescript
    const addControls =  Impl.addControl({
        componentFunc: controls,
        name: 'Deploy & Interaction',
        iconName: 'GroupObject',
    })

    ctx.subscriptions.push(addControls)
```

### Setting up the welcome page
```typescript
    const setWelcomePage =  Impl.setWelcomePage({
        componentFunc: welcomePage,
        name: 'welcomePage',
        iconName: 'GroupObject',
    })

    ctx.subscriptions.push(setWelcomePage)
```

### Register command
```typescript
    const setCommand =  Impl.registerCommand({
        id: 'commandId',
        name: 'command',
        callback: <T>(data?: T) => void,
    })

    ctx.subscriptions.push(setCommand)
```

### Registration Method
```typescript
    const registerFunction =  Impl.registerFunction({
        name: 'functionName',
        function: <T>(data?: T) => void,
    })

    ctx.subscriptions.push(registerFunction)
```