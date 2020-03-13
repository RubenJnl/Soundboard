# Soundboard

# Adding sounds
You need to do two things.

Add the file to the `./sounds` folder.

Open `./api/sounds.json` and add the settings.

A sound has a few settings that are required: title, file and at least one of the filetypes boolean needs to be true, depending on the files you added.

### filetypes
* ogg
* mp3
* m4a

Example:

```
{
    "title" : "Womp Womp Womp",
    "subtitle" : "Sad Trombone",
    "file" : "sad-trombone",
    "mp3" : true,
    "m4a" : true
},
```


### Develop:

`npm run dev`

### Build

`npm run build`

### Serve

(production build)
`npm run serve`

### Deploy

`npm run deploy`

### Shortcuts

`npm run build+serve`
`npm run build+deploy`
