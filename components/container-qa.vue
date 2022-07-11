<template>
  <div itemscope itemprop="mainEntity" itemtype="https://schema.org/Question" :class="{ faqitem: true, open: isOpen}">
    <p itemprop="name" @click="handleClick">
      <button aria-label="Toon of verberg vraag" :aria-expanded="isOpen">
        <span>{{ question }}</span>
      </button>
      <svg
        viewBox="0 0 18 13"
        aria-hidden="true"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fill="currentColor"
          d="M9.80109 11.9278C9.40115 12.4631 8.59884 12.4631 8.19891 11.9278L0.668084 1.84854C0.175361 1.18908 0.645971 0.25 1.46918 0.25L16.5308 0.250002C17.354 0.250002 17.8246 1.18908 17.3319 1.84854L9.80109 11.9278Z"
        />
      </svg>
    </p>
    <div ref="answer" class="answer" itemscope itemprop="acceptedAnswer" itemtype="https://schema.org/Answer">
      <div itemprop="text">
        <span>{{ answer }}</span>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
  props: {
    question: {
      type: String,
      required: true
    },
    answer: {
      type: String,
      required: true
    },
  },
  data() {
    return {
      isOpen: false
    }
  },
  methods: {
    handleClick() {
      this.isOpen = !this.isOpen;
    }
  }
})
</script>

<style scoped>
.faqitem > p,
.answer {
  padding: 1rem 2rem;
  margin: 0 2rem;
}

.faqitem > p {
  display: grid;
  align-items: center;
  grid-template-columns: 1fr 18px;
  gap: 1rem;
  justify-content: space-between;
  background: var(--color-primary);
  color: #fff;
  cursor: pointer;
  border-bottom: solid 1px #fff;
}

.faqitem > p button {
  border: none;
  background: none;
  font-weight: 800;
  text-align: left;
  font-size: var(--body-font-size);
  color: #fff;
}

.faqitem > p svg {
  width: 18px;
  height: 13px;
  transform: rotate(0deg);
  transition: transform 0.2s ease-out;
  will-change: transform;
}

.answer {
  transform: translateX(-200%);
  opacity: 0;
  transition: transform 0.2s ease-out;
  will-change: transform, opacity;
  display: none;
}

.faqitem.open > p svg {
  transform: rotate(180deg);
}

.faqitem.open .answer {
  transform: translateX(0);
  opacity: 1;
  display: block;
}
</style>
