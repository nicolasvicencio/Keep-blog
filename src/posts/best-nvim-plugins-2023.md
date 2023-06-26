---
title: "My essentials neovim plugins 2023"
subtitle: "These are the most usefull plugins for neovim, to finally move out from vscode."
date: "2023-06-16"
thumbnail: "thumbnails/nvim-essentials-plugins.png"
---

![thumbnails/nvim-essentials-plugins](/thumbnails/nvim-essentials-plugins.png)

Neovim is a highly customizable and powerful text editor that serves as a modern alternative to the classic Vim editor.
It aims to improve upon Vim's functionalities while maintaining compatibility with its keybindings and scripting capabilities.
Neovim is designed to enhance the editing experience for developers, programmers, and power users.

### Why I should use neovim?

There no best thing to were writing code for longs periods of time without touching the mouse, it's simply more fast and fun!.
Visual Studio Code its great but after some time, it can became very boring.

Advantages

- It's Fun!
- In due time you become more fast!
- Highly customizable

## Intalling neovim

To install neovim you can use the following commands:

### Windows

With chocolatey

```
choco install neovim
```

### MacOs

With homebrew

```
brew install neovim
```

## Linux distributions

#### Debian and Ubuntu based distros

```
sudo apt install neovim
```

#### Arch based distros

```
sudo pacman -S neovim
```

#### Fedora

```
sudo dnf install -y neovim python3-neovim
```

## Plugins

### Telescope.nvim

![images/telescope-plugin](/images/telescope-plugin.png)

[ Telescope.nvim ]('https://github.com/nvim-telescope/telescope.nvim') its an amazing plugin that allows you to move between your projects files in supersonic speed.
you can also grep text, navigate between buffers, view commits, go to definitions, view instances, etc. You must have this plugin in your workflow.

> If you wanna use grep finder you must install `ripgrep`

### LazyGit

![images/lazygit](/images/lazygit-plugin.png)

[Lazy Git]('https://github.com/kdheepak/lazygit.nvim') Lazy Git it's simple terminal UI for git commands, written in Go with the [gocui]('https://github.com/jroimartin/gocui')
library. If you like the git implementations of VSCode Lazy git provide you that and much more.. and faster.

### Vim Visual Multi

![images/multi-plugin](/images/multi-plugin.png)

[Vim Visual Multi]('https://github.com/mg979/vim-visual-multi') It's called vim-visual-multi in analogy with visual-block, but the plugin works mostly from normal mode.
It allows you to generate multiple cursors and select same words in the file.

### Nvim Treesitter

![images/treesitter-plugin](/images/treesitter-plugin.png)

The goal of [nvim-treesitter]('nvim-treesitter/nvim-treesitter') is both to provide a simple and easy way to use the interface for [tree-sitter]('https://github.com/tree-sitter/tree-sitter')
in Neovim and to provide some basic functionality such as highlighting your code and make it prettier!

### Surround.vim

This is simple but really useful. [Surround.vim]('https://github.com/tpope/vim-surround') is all about "surroundings": parentheses, brackets, quotes, XML tags, and more. The plugin provides mappings to easily delete, change and add such surroundings in pairs.

For example if we have this string

```
"Vim is amazing!"
```

With `cs"'` chages to

```
'Vim is amazing!'
```

If you wanna surround the string with { } go to select mode and press `S{`

```
{'Vim is amazing!'}
```
