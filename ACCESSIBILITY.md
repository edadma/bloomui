# Accessibility (WCAG) Checklist

## Completed
- ✅ Button: Added `aria-busy` for loading state
- ✅ Button: Auto-disable when loading
- ✅ Button: Added `aria-hidden` to loading spinner
- ✅ Input: Already forwards all props including ARIA attributes
- ✅ PageLayout: Added `text-base-content` for theme-aware text
- ✅ Modal: Focus trap (native `<dialog>` with `showModal()`)
- ✅ Modal: ESC key to close (native `<dialog>` behavior)
- ✅ Modal: Focus restoration on close
- ✅ Modal: Added `aria-labelledby` linking to title
- ✅ Modal: Added `aria-describedby` linking to content
- ✅ Form.Item: Label associates with input via `htmlFor`/`id`
- ✅ Form.Item: Added `aria-invalid` when validation fails
- ✅ Form.Item: Added `aria-describedby` linking to error message
- ✅ Form.Item: Error messages have `role="alert"` for announcements
- ✅ Dropdown: Keyboard navigation (Arrow keys, Enter/Space, Escape, Home/End)
- ✅ Dropdown: `aria-haspopup`, `aria-expanded`, `aria-controls` on trigger
- ✅ Dropdown: `role="menu"` on menu, `role="menuitem"` on items
- ✅ Dropdown: `aria-disabled` on disabled items, `role="separator"` on dividers
- ✅ Dropdown: Focus management and click-outside to close
- ✅ Alert: Already has `role="alert"`

## To Do

### Medium Priority
- [ ] Tabs: Keyboard navigation, proper ARIA roles
- [ ] Checkbox/Radio: Ensure group labeling with fieldset/legend
- [ ] Select: Custom select needs full keyboard support

### Low Priority
- [ ] Add skip navigation link component
- [ ] Ensure all focusable elements have visible focus indicators
- [ ] Color contrast audit for all theme combinations
- [ ] Screen reader testing with NVDA/JAWS

## Testing
- [ ] Set up automated accessibility testing (axe-core, pa11y)
- [ ] Document keyboard shortcuts for each interactive component
- [ ] Create accessibility example page in docs
