import {Pagination as MUIPagination, Stack} from "@mui/material/";

export default function Pagination({totalPages, page, onChange}) {
  return (
    <div className="pagination">
      <Stack spacing={2}>
        <MUIPagination
          count={totalPages}
          page={page}
          onChange={onChange}
          color="secondary"
          shape="rounded"
          size="large"
        />
      </Stack>
    </div>
  );
}
