export type Metric = {
    value: number
    page: number
    bbox: {
      x: number
      y: number
      width: number
      height: number
    }
    source_text: string
  }
  
  export type ReportData = {
    metrics: {
      total_jobs: Metric
    }
    regions: {
      [key: string]: {
        pure_play: number
        hybrid: number
      }
    }
    projections: {
      [year: string]: number
    }
  }