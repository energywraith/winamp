# Web winamp

Remember the old good times when you used to listen to the legendary songs on your windows 95 using winamp? Well those times arent back, but we can pretend that this is the case thank to **WEB WINAMP 9999**. You can use winamp anytime and anywhere, all you need is a web browser and a little bit of internet connection :flushed:.

## Technologies:

```diff
+ TypeScript
+ Nuxt 3
+ Vue 3
+ Pinia
+ SCSS
+ ytdl-core
- Boring libraries
```

## Transition from Express to Nuxt 3

During the development of the application, I noticed that the express on the backend actually just complicates the code of my application. The backend is very simple, its only task at the moment is to download songs using Ytdl, which is impossible on the client side.

Knowing a bit about the React ecosystem, I started to look into whether there might be some interesting Next counterpart for Vue. And here came Nuxt 3, which delighted me with its simplicity, as well as the amount of facilitation it serves. So I decided to move Winamp from Express to Nuxt!

## How to run the project?

First clone the repository:
```bash
git clone https://github.com/energywraith/winamp.git
```

Install dependencies:
```bash
yarn install
```

### Development Server

Start the development server on http://localhost:3000

```bash
npm run dev
```

### Production

Build the application for production:

```bash
npm run build
```

Locally preview production build:

```bash
npm run preview
```

### Known Issues:

* Does not work on Safari

### Do you see anything that could be refined? Let me know, I will be happy to hear!