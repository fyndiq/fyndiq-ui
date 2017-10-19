# fyndiq-component-loader [![npm](https://img.shields.io/npm/v/fyndiq-component-loader.svg?maxAge=3600)](https://www.npmjs.com/package/fyndiq-component-loader)

[Preview](http://developers.fyndiq.com/fyndiq-ui/?selectedKind=Loader&selectedStory=default)

A Loader icon for Fyndiq

# Installation

The component can be installed through NPM:

``` bash
npm i -S fyndiq-component-loader
```

# Usage

``` js
import React from 'react'
import Loader from 'fyndiq-component-loader'

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

| Name | Type | Description | Default value |
|---|---|---|---|
| **size** | Number | Size of the logo | 50 |
| **className** | String | Class for advanced styling | `''` |
| **color1** | String | First color of the loader | red |
| **color2** | String | Second color of the loader | blue |
| **waveLength** | Number | Wavelength of the wave | 80 |
| **waveAmplitude** | Number | Amplitude of the wave | 25 |
