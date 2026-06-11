<!-- Use this file to provide workspace-specific custom instructions to Copilot. For more details, visit https://code.visualstudio.com/docs/copilot/copilot-customization#_use-a-githubcopilotinstructionsmd-file -->

# Luxury E-commerce Development Guide

## Project Overview
This is a luxury e-commerce website built with React.js following industry best practices. The project uses modern tooling and architecture patterns for scalability.

## Development Standards

### Code Style
- Use functional components with hooks
- Follow React naming conventions
- Use destructuring for props
- Add PropTypes for component validation

### Component Organization
- One component per file
- Group related components in folders
- Export as default at the end of file
- Keep components small and focused

### State Management
- Use Zustand for global state (cart, auth)
- Use useState for local component state
- Use useContext for theme/config

### Styling
- Use Tailwind CSS utility classes
- Follow the luxury color scheme (gold, brown tones)
- Mobile-first responsive design
- Use custom CSS only when necessary

### File Structure Rules
- Components: `src/components/[Category]/ComponentName.jsx`
- Pages: `src/pages/PageName.jsx`
- Store: `src/store/storeName.js`
- Services: `src/services/serviceName.js`
- Utils: `src/utils/functionName.js`

### API Integration
- Use services from `src/services/`
- Handle errors with try-catch
- Use axios interceptors for auth
- Mock data in development

## Common Tasks

### Adding a New Page
1. Create file in `src/pages/`
2. Add route in `App.jsx`
3. Add navigation link in Header

### Adding a New Component
1. Create in appropriate folder under `src/components/`
2. Use functional component with hooks
3. Add Tailwind styling
4. Export as default

### Adding to Cart
```javascript
import { useCartStore } from '../store/cartStore';
const addToCart = useCartStore((state) => state.addToCart);
addToCart(product, quantity, size, color);
```

## Testing Checklist
- [ ] All pages render without errors
- [ ] Navigation works correctly
- [ ] Cart functionality works
- [ ] Forms validate input
- [ ] Mobile responsive
- [ ] Images load correctly
- [ ] No console errors

## Performance Tips
- Code split pages with React.lazy()
- Optimize images with proper formats
- Use React.memo for expensive renders
- Lazy load images with intersection observer
- Minify and bundle for production

## Debugging
- Use React DevTools browser extension
- Check Zustand DevTools for state
- Use Network tab for API calls
- Enable source maps in dev
