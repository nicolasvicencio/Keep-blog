---
title: "My essentials neovim plugins 2023"
subtitle: "These are the most usefull plugins for neovim, to finally move out from vscode."
date: "2023-06-16"
thumbnail: "thumbnails/nvim-essentials-plugins.png"
---

![thumbnails/nvim-essentials-plugins](/thumbnails/nvim-essentials-plugins.png)

Neovim es un editor de texto altamente personalizable y potente que sirve como alternativa moderna al clásico editor Vim. Su objetivo es mejorar las funcionalidades de Vim manteniendo la compatibilidad con sus combinaciones de teclas y capacidades de scripting. Neovim está diseñado para mejorar la experiencia de edición de desarrolladores, programadores y usuarios avanzados.

### Por que deberia usar NeoVim?

No hay nada mejor que estar escribiendo código durante largos periodos de tiempo sin tocar el ratón, simplemente es más rápido y divertido. Visual Studio Code es genial, pero después de algún tiempo, puede llegar a ser muy aburrido.

Ventagas

- Es divertido!
- En el debido tiempo puedes programar mas rapido
- Altamente customizable

## Instalar neovim

Para instalar neovim puede utilizar los siguientes comandos:

### Windows

Con chocolatey

```
choco install neovim
```

### MacOs

Con homebrew

```
brew install neovim
```

## Distribuciones Linux

#### Distros basadas en Debian y Ubuntu

```
sudo apt install neovim
```

#### Distros basadas en Arch

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

[ Telescope.nvim ]('https://github.com/nvim-telescope/telescope.nvim') es un plugin increíble que te permite moverte entre los archivos de tus proyectos a una velocidad supersónica. también puedes buscar texto, navegar entre buffers, ver commits, ir a definiciones, ver instancias, etc. Definitivamente debes tener este plugin en tu flujo de trabajo.

> Si quieres utilizar la funcionalidad de grep finder debes instalar `ripgrep`

### LazyGit

![images/lazygit](/images/lazygit-plugin.png)

[Lazy Git]('https://github.com/kdheepak/lazygit.nvim') Lazy Git es un simple terminal UI para comandos git, escrito en Go con la librería [gocui]('https://github.com/jroimartin/gocui')
. Si te gustan las implementaciones git de VSCode Lazy git te proporciona eso y mucho más.. y más rápido.

### Vim Visual Multi

![images/multi-plugin](/images/multi-plugin.png)

[Vim Visual Multi]('https://github.com/mg979/vim-visual-multi') Se llama vim-visual-multi en analogía con visual-block, pero el plugin funciona principalmente en modo normal. Te permite generar múltiples cursores y seleccionar las mismas palabras en el archivo.

### Nvim Treesitter

![images/treesitter-plugin](/images/treesitter-plugin.png)

El objetivo de [nvim-treesitter]('nvim-treesitter/nvim-treesitter') es tanto proporcionar una forma simple y fácil de utilizar la interfaz para [tree-sitter]('https://github.com/tree-sitter/tree-sitter') en Neovim como proporcionar algunas funcionalidades básicas como resaltar tu código y ¡hacerlo más bonito!

### Surround.vim

Surround es simple pero realmente útil. [Surround.vim]('https://github.com/tpope/vim-surround') es todo sobre "surrounds": paréntesis, corchetes, comillas, etiquetas XML, y más. El plugin proporciona mapeados para eliminar, cambiar y añadir fácilmente dichos alrededores de dos en dos.

Por ejemplo si tenemos este string:

```
"Vim is amazing!"
```

Con `cs"'` lo cambia a

```
'Vim is amazing!'
```

Si quires encerrar la cadena con { } ve a modo seleccion y presiona `S{`

```
{'Vim is amazing!'}
```
