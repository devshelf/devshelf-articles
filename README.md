# DevShelf Articles

Everybody from community could contribute their materials (articles, books, tools) to [DevShelf](http://devshelf.us) library.

To add your materials all you need to do, is to select wanted category by `*.json` file in this directory (or create your own), and leave a pull request with new object in array.

Example:

```json
{
    "css": [
            {
                "url": "http://operatino.github.io/MCSS/en/",
                "title": "Multilayer CSS",
                "author": "Robert Haritonov",
                "author-link": "http://rhr.me",
                "author-mail": "r@rhr.me",
                "author-mail-hash": "r@rhr.me",
                "id":"mcss",
                "tags": [
                    "css methodologies",
                    "best practises"
                ]
            },
            {
                "url": "..."
            }
        ]
}
```

Where,

* *`url` - link to the article or interesting material
* *`title` - its title
* `description` - article description (not vital but usefull)
* `auhtor-*` - author name, link to info about him and email for gravatar
* `id` - ID's are optional, will be generated automatically
* `tags` - first tag in array defines main object category, other tags will be also searchable on [DevShelf](http://devshelf.us)

\* obligatory fields

## Setup

This repository is used from main project, and is connected through symlink from `devshelf-articles/` to `devshelf/articles-data`.
