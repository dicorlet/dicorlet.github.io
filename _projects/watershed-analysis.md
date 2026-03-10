---
title: "Watershed Analysis"
description: "Watershed boundary delineation and flow accumulation modeling for Chorro Creek drainage basin."
tags: ["ArcGIS", "GRASS GIS", "Watershed", "GIS"]
map_center: [35.35, -120.72]
map_zoom: 12
featured: true
---

## Overview

A comprehensive watershed analysis of the Chorro Creek drainage basin on California's Central Coast. This project characterized the hydrological structure, land cover distribution, and hydrologic connectivity of a watershed that drains into Morro Bay National Estuary.

## Watershed Characteristics

The Chorro Creek watershed encompasses approximately **285 km²** of mixed land use including:

- Coastal oak woodland and chaparral (42%)
- Annual grassland and rangeland (35%)
- Agricultural lands (16%)
- Developed/urban areas (7%)

## Methods

### Boundary Delineation
Watershed boundaries were delineated using the ArcGIS Spatial Analyst hydrology toolchain:

1. Fill sinks in the 10m NED DEM
2. Compute flow direction (D8 algorithm)
3. Compute flow accumulation grid
4. Snap pour point to highest accumulation cell within 150m
5. Delineate watershed from pour point

### Sub-watershed Analysis
The main watershed was subdivided into **12 sub-watersheds** to support reach-scale management planning. Each sub-watershed was characterized by:

- Area and relief ratio
- Drainage density
- Land cover composition (NLCD 2021)
- Impervious surface fraction

### Runoff Estimation
Applied the NRCS Curve Number method to estimate peak runoff for 10-year and 100-year 24-hour design storms using spatially distributed CN values derived from soil (SSURGO) and land cover data.

## Tools & Data

| Tool | Purpose |
|------|---------|
| ArcGIS Pro | Primary analysis platform, hydrology tools |
| GRASS GIS | Secondary validation, r.watershed |
| Python (arcpy) | Batch processing sub-watersheds |
| NLCD 2021 | Land cover classification |
| SSURGO | Soil hydrologic groups |
| USGS NED | 10m elevation data |

## Results

- Delineated main watershed boundary and 12 sub-watersheds
- Identified 3 sub-watersheds with elevated runoff potential (CN > 75)
- Mapped 47 km of stream network with flow accumulation ≥ 5,000 cells
- Estimated 10-yr peak discharge of ~85 m³/s at watershed outlet
