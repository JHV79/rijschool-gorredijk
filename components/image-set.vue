<template>
  <img
    :loading="loading"
    :alt="alt"
    :width="maxWidth"
    :height="maxHeight"
    :src="getSrc()"
    :sizes="getSizes()"
    :srcset="getSrcSet()"
  />
</template>

<script lang="ts">
import Vue from 'vue'
import { stringify, parse } from 'querystring'

function calcSet(amount: number, min: number, max: number): number[] {
  const ret: number[] = []
  if (min >= max) {
    return [min]
  }
  if (max > 8000) {
    throw new Error("Image dimensions are too large !?")
  }
  const step = (max - min) / (amount - 1)
  for (let i = 0; i < amount; i++) {
    ret.push(Math.round(min + step * i))
  }
  return ret
}

export default Vue.extend({
  props: {
    minWidth: {
      type: Number,
      required: true
    },
    maxWidth: {
      type: Number,
      required: true
    },
    maxHeight: {
      type: Number,
      required: true
    },
    count: {
      type: Number,
      required: true
    },
    src: {
      type: String,
      required: true
    },
    alt: {
      type: String,
      default: ''
    },
    loading: {
      type: String,
      default: 'lazy'
    },
    flip: {
      type: String,
      default: ''
    }
  },
  methods: {
    getImgSrc(width: number): string {
      let [ url, qs ] = this.src.split('?');
      qs = qs || '';
      let params = parse(qs);
      params.auto = 'format';
      if(this.flip !== '') {
        params.flip = this.flip;
      }
      // const url = this.src.indexOf('?') === -1 ? this.src : this.src.substring(0, this.src.indexOf('?'))
      // const qs: any = {
      //   auto: 'format',
      //   fit: 'crop',
      //   w: width,
      //   'max-w': width
      // }
      // if(this.flip !== '') {
      //   qs.flip = this.flip
      // }
      return url + '?' + stringify(params);
    },
    getSrc() {
      return this.getImgSrc(this.maxWidth)
    },
    getSrcSet() {
      const widths = calcSet(this.count, this.minWidth, this.maxWidth)
      const srcsets: string[] = []
      // image1.webp 100w
      for(let i = 0; i < widths.length; i++) {
        srcsets.push(`${this.getImgSrc(widths[i])} ${widths[i]}w`)
      }
      return srcsets.join(',')
    },
    getSizes() {
      return `(max-width: ${this.maxWidth}px) 100vw, ${this.maxWidth}px`
    }
  }
})
</script>
