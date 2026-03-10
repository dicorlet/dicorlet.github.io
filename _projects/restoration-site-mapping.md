---
title: "Restoration Site Mapping"
description: "Spatial inventory and suitability analysis for low-tech process-based restoration (LTPBR) sites along degraded stream corridors."
tags: ["QGIS", "Leaflet", "Conservation", "Remote Sensing"]
map_center: [35.32, -120.68]
map_zoom: 13
featured: false
---

## Overview

This project developed a GIS-based suitability framework for identifying candidate sites for low-tech process-based restoration (LTPBR) — including beaver dam analogs (BDAs) and post-assisted log structures (PALS) — along incised and degraded stream corridors in San Luis Obispo County.

## Background

Low-tech process-based restoration (LTPBR) uses simple, inexpensive structures to mimic natural wood and beaver dam processes that slow water, raise water tables, and promote floodplain reconnection. Mapping suitable sites at the watershed scale is a critical first step before field-level design.

## Suitability Criteria

Sites were scored against five criteria weighted using an AHP (Analytic Hierarchy Process) approach:

| Criterion | Weight | Data Source |
|-----------|--------|-------------|
| Channel slope (1–4%) | 30% | LiDAR DEM |
| Valley bottom width | 25% | NAIP + manual mapping |
| Stream power index | 20% | DEM-derived |
| Riparian vegetation cover | 15% | NDVI (Sentinel-2) |
| Proximity to existing structures | 10% | Field GPS data |

## Methods

### Remote Sensing Analysis
- Downloaded Sentinel-2 imagery (10m, cloud-free composite, summer 2023)
- Computed NDVI to characterize riparian vegetation density
- Classified valley bottom extent using slope thresholds and hillshade analysis

### Site Identification
- Extracted channel reach segments with slope between 1–4% (optimal for BDAs)
- Filtered for valley width > 15m to ensure room for structure installation
- Applied composite suitability score; retained reaches scoring ≥ 0.65 (0–1 scale)

### Field Verification
Selected high-priority reaches were visited to verify:
- Channel incision depth and bank height
- Substrate type (gravel/cobble preferred)
- Landowner access and adjacency to infrastructure

## Results

- Mapped **62 km** of stream corridor with moderate-to-high LTPBR suitability
- Identified **148 candidate sites** (97 BDA, 51 PALS)
- High-priority cluster of 23 sites identified in mid-watershed reach
- Field-verified 18 sites; 15 confirmed suitable for near-term implementation

## Tools

- **QGIS** — Primary mapping and spatial analysis
- **Sentinel-2 / Google Earth Engine** — NDVI and vegetation analysis
- **Python (rasterio, shapely)** — Raster processing and scoring
- **Leaflet.js** — Interactive web map for stakeholder review
- **GPS** — Field data collection
