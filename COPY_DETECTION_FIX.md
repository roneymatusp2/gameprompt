# Copy Detection Fix - Summary

## Problem
Users were able to copy the challenge text directly and receive high scores (e.g., 72 points for "Great prompt!") instead of being penalised for not creating a proper AI instruction prompt.

## Root Cause
1. The similarity detection threshold was too high (90%), allowing copies to pass
2. The word matching logic was not strict enough
3. The Gemini API prompt instructions were not emphatic enough about detecting copies

## Changes Made

### 1. Stricter Copy Detection in Mock Mode (`gemini-integration.js`)
- **Lowered similarity threshold from 90% to 60%**
- Added word-matching ratio check (70% threshold)
- Added check for instruction phrases (Act as, Pretend, etc.)
- Added detailed console logging for debugging

### 2. Updated Gemini API Instructions
Both in `gemini-integration.js` and `netlify/functions/gemini-evaluate.js`:
- Added prominent warning with examples of bad vs good prompts
- Lowered similarity threshold to 60% in instructions
- Made it clear that ALL criteria should be 0 if copying is detected
- Used visual markers (⚠️ ❌ ✅) to emphasise the rule

### 3. Added Guest Mode Warning Banner
- Shows a dismissible banner when in mock mode
- Informs users that they're using mock evaluation
- Encourages sign-in for accurate AI-powered feedback

## Testing

### Test Cases
1. **Direct Copy** (Should FAIL - Score 0)
   - Input: "Explain quantum computing to a child"
   - Expected: 0 points, copy detection message

2. **Good Prompt** (Should PASS - Score 60+)
   - Input: "Act as a friendly teacher. Explain quantum computing using simple analogies that a 10-year-old would understand."
   - Expected: 60+ points, positive feedback

3. **Partial Copy** (Should FAIL - Score 0-20)
   - Input: "Create a prompt for explaining quantum computing to a child"
   - Expected: Low score, suggestion to add instruction phrases

### How to Test
1. Open `test-copy-detection.html` in browser
2. Run all three test cases
3. Check console logs for similarity scores
4. Verify that copies receive 0 points

## Deployment
1. Commit changes to git
2. Push to Netlify (automatic deployment)
3. Verify Gemini API key is configured in Netlify environment variables
4. Test on production site

## British English
All feedback messages use British English spelling:
- "organise" not "organize"
- "colour" not "color"
- "analyse" not "analyze"
