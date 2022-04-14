# Troubleshooting

## React error "Unable to find node on an unmounted component" thrown in dependent app

When you consume this package as a dependency in a different application, you might get an error like
this one:

```
(...) Error: Unable to find node on an unmounted component.
at ...
(...)
```

Make sure React and ReactDOM peer dependencies are correctly set to the supported version. As of this
writing, current versions are 16.x because of `react-virtualized`. Therefore, in case your dependent
app displays the error above, pin React/ReactDOM versions to 16.14.0 or newer (but older than 17.0.0).

Note: Supposedly, `react-virtualized` peer dependencies for React/ReactDOM [have been updated to support
17.x](https://github.com/bvaughn/react-virtualized/pull/1625), but haven't been published yet. Then,
we need to stick to 16.x until that happens, and re-publish this package bumping its major version if
already released.