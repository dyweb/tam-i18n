# Tam-HTML

HTML i18n(internationalization) support for [Tam](https://github.com/arrowrowe/tam-html).

## Usage

This plugin wraps [gulp-html-i18n](https://github.com/webyom/gulp-html-i18n). Here is an example:

```json
{
    // ...
    "plugins": {
        "tam-i18n": {
          "src": ["./src/index.html"],
          "dest": "./",
          "langDir": "./lang"
        }
    },
    // ...
}
```

The `lang` directory is listed as follows:

```
lang
├─ en-US
│  └─ index.json
└─ zh-CN
   └─ index.json
```

In the example above, both `index.en-US.html` and `index.zh-CN.html` will be generated.

## License

MIT License
