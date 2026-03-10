---
title: "Stream Network Mapping"
description: "Automated stream network delineation using DEM analysis and flow accumulation algorithms in the San Luis Obispo region."
tags: ["QGIS", "Python", "Hydrology", "DEM"]
map_center: [35.28, -120.66]
map_zoom: 11
featured: true
---

## Overview

This project involved the automated delineation of stream networks across the San Luis Obispo region using high-resolution digital elevation models (DEMs) and flow accumulation algorithms. The goal was to produce an accurate, reproducible hydrological network suitable for downstream watershed management applications.

## Methods

- **DEM Preprocessing**: Sourced 1-meter LiDAR-derived DEMs from the USGS 3DEP program. Applied pit-filling and depression-breaching to ensure hydrological continuity.
- **Flow Direction & Accumulation**: Used D8 flow direction algorithm in GRASS GIS (`r.watershed`) to compute upstream contributing area.
- **Channel Initiation**: Applied a flow accumulation threshold (≥1,000 cells at 1m resolution) to define stream initiation points.
- **Network Vectorization**: Converted raster stream networks to vector polylines using QGIS, then attributed reaches with Strahler stream order.
- **Validation**: Cross-referenced delineated network with NHD (National Hydrography Dataset) and field-verified reaches.

## Tools & Data

| Tool | Purpose |
|------|---------|
| GRASS GIS | Flow direction/accumulation, watershed delineation |
| QGIS | Visualization, vectorization, attribute editing |
| Python (geopandas) | Post-processing and attribute joins |
| USGS 3DEP | 1m LiDAR DEM source data |
| NHD | Validation reference network |

## Results

The delineated network captured **347 km** of stream channels, including 82 km of ephemeral and intermittent reaches not represented in the NHD. Stream order classification revealed a 6th-order main channel with 4 major tributaries.

## Key Findings

- LiDAR-derived networks outperformed 10m DEM networks in capturing headwater channels
- Ephemeral channels constituted ~24% of total network length
- Approximately 18% of delineated reaches showed evidence of channel incision based on longitudinal profile analysis
