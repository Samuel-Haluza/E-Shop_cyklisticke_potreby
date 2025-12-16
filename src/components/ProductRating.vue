<template>
  <div class="rating-section">
    <div class="rating-display">
      <div class="stars">
        <span v-for="i in 5" :key="i" class="star" :class="{ filled: i <= Math.round(rating) }">
          ★
        </span>
      </div>
      <div class="rating-info">
        <span class="rating-value">{{ rating.toFixed(1) }}</span>
        <span class="reviews-count">({{ reviewCount }} recenzií)</span>
      </div>
    </div>
    <div class="rating-form">
      <h4>Napíšte recenziu</h4>
      <div class="form-group">
        <label>Vaše hodnotenie:</label>
        <div class="star-selector">
          <span 
            v-for="i in 5" 
            :key="i" 
            class="star selectable"
            :class="{ selected: i <= userRating }"
            @click="userRating = i"
          >
            ★
          </span>
        </div>
      </div>
      <div class="form-group">
        <textarea 
          v-model="userReview" 
          placeholder="Vaša recenzia..."
          rows="4"
        ></textarea>
      </div>
      <button @click="submitReview" class="submit-btn">Odoslať recenziu</button>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    rating: {
      type: Number,
      default: 4.5
    },
    reviewCount: {
      type: Number,
      default: 24
    }
  },
  data() {
    return {
      userRating: 0,
      userReview: ''
    }
  },
  methods: {
    submitReview() {
      if (this.userRating > 0 && this.userReview.trim()) {
        this.$emit('review-submitted', {
          rating: this.userRating,
          review: this.userReview
        })
        this.userRating = 0
        this.userReview = ''
      } else {
        alert('Prosím vyplňte hodnotenie a recenziu')
      }
    }
  }
}
</script>

<style scoped>
.rating-section {
  background: var(--light-bg);
  padding: 2rem;
  border-radius: 8px;
  margin: 2rem 0;
}

.rating-display {
  display: flex;
  align-items: center;
  gap: 2rem;
  margin-bottom: 2rem;
}

.stars {
  display: flex;
  gap: 0.5rem;
}

.star {
  font-size: 1.5rem;
  color: #ddd;
  transition: all 0.3s ease;
}

.star.filled {
  color: #ffc107;
  text-shadow: 0 0 5px rgba(255, 193, 7, 0.5);
}

.rating-info {
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
}

.rating-value {
  font-size: 1.8rem;
  font-weight: bold;
  color: var(--primary-color);
}

.reviews-count {
  color: #999;
  font-size: 0.9rem;
}

.rating-form {
  border-top: 1px solid var(--border-color);
  padding-top: 2rem;
}

.rating-form h4 {
  margin-bottom: 1.5rem;
  color: var(--text-color);
}

.form-group {
  margin-bottom: 1.5rem;
}

.form-group label {
  display: block;
  margin-bottom: 0.5rem;
  color: var(--text-color);
  font-weight: 600;
}

.star-selector {
  display: flex;
  gap: 0.5rem;
}

.star.selectable {
  font-size: 2rem;
  cursor: pointer;
  color: #ddd;
  transition: all 0.3s ease;
}

.star.selectable:hover,
.star.selectable.selected {
  color: #ffc107;
  transform: scale(1.2);
  text-shadow: 0 0 5px rgba(255, 193, 7, 0.5);
}

textarea {
  width: 100%;
  padding: 0.75rem;
  border: 1px solid var(--border-color);
  border-radius: 4px;
  font-family: inherit;
  font-size: 1rem;
  resize: vertical;
}

textarea:focus {
  outline: none;
  border-color: var(--primary-color);
  box-shadow: 0 0 5px rgba(30, 144, 255, 0.3);
}

.submit-btn {
  background: var(--primary-color);
  color: white;
  border: none;
  padding: 0.75rem 2rem;
  border-radius: 4px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
}

.submit-btn:hover {
  background: var(--primary-dark);
  transform: translateY(-2px);
  box-shadow: var(--shadow-hover);
}

.submit-btn:active {
  transform: translateY(0);
}
</style>
