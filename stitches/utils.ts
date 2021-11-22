const utils = {
  // Margin: Abbreviated properties
  m: (value: string) => ({
    margin: value,
  }),
  mt: (value: string) => ({
    marginTop: value,
  }),
  mr: (value: string) => ({
    marginRight: value,
  }),
  mb: (value: string) => ({
    marginBottom: value,
  }),
  ml: (value: string) => ({
    marginLeft: value,
  }),
  mx: (value: string) => ({
    marginLeft: value,
    marginRight: value,
  }),
  my: (value: string) => ({
    marginTop: value,
    marginBottom: value,
  }),

  // Padding: Abbreviated properties
  p: (value: string) => ({
    padding: value,
  }),
  pt: (value: string) => ({
    paddingTop: value,
  }),
  pr: (value: string) => ({
    paddingRight: value,
  }),
  pb: (value: string) => ({
    paddingBottom: value,
  }),
  pl: (value: string) => ({
    paddingLeft: value,
  }),
  px: (value: string) => ({
    paddingLeft: value,
    paddingRight: value,
  }),
  py: (value: string) => ({
    paddingTop: value,
    paddingBottom: value,
  }),

  // Size: Apply width/height together
  size: (value: string) => ({
    width: value,
    height: value,
  }),

  // Border radius: Apply on pairs of corners
  borderTopRadius: (value: string) => ({
    borderTopRightRadius: value,
    borderTopLeftRadius: value,
  }),
  borderRightRadius: (value: string) => ({
    borderTopRightRadius: value,
    borderBottomRightRadius: value,
  }),
  borderBottomRadius: (value: string) => ({
    borderBottomRightRadius: value,
    borderBottomLeftRadius: value,
  }),
  borderLeftRadius: (value: string) => ({
    borderTopLeftRadius: value,
    borderBottomLeftRadius: value,
  }),
} as const;

export default utils;
