# fyndiq-icon-loader

A Loader icon for Fyndiq

# Installation

The component can be installed through NPM:

``` bash
npm i -S fyndiq-icon-loader
```

# Usage

``` js
import React from 'react'
import Loader from 'fyndiq-icon-loader'

// Basic usage
<Loader />

// Change the size
<Loader size={50} />

// Change the colors
<Loader color1="black" color2="white" />

// Change the wave properties
<Loader waveAmplitude={40} waveLength={50} />
```

# API

The icon `Loader` has the following customizable props:

- **size**: (Number) Size of the logo
- **className**: (String) class for advanced styling
- **color1**: (String) first color of the loader
- **color2**: (String) second color of the loader
- **waveLength**: (Number) wavelength of the wave
- **waveAmplitude**: (Number) amplitude of the wave
