import type { Ref, VNodeRef } from "vue";
import { usePlaylistStore } from "@/stores/playlist";
import { ContextMenuOption } from "@/types/contextMenuOption";

export const usePlaylistMenus = () => {
  const playlistStore = usePlaylistStore();

  const getAddOptions = (_: Ref<VNodeRef> | null) => [
    {
      name: "Add file(s)",
      onClick: () => {},
      disabled: true,
    },
    {
      name: "Add folder",
      onClick: () => {},
      disabled: true,
    },
    {
      name: "Add URL",
      onClick: () => {
        // const url = prompt("ITS TEMPORARY DONT WORRY: Input url :)");
        // if (!url) return;
        // if (!matchYoutubeLinkRegex(url) && !matchYoutubeIdRegex(url)) {
        //   alert("INVALID URL");
        //   return;
        // }
        // playlistStore.addSongToPlaylist(url);
      },
      disabled: true,
    },
  ];

  const getRemoveOptions = (songListRef: Ref<VNodeRef> | null) => [
    {
      name: "Remove selected",
      onClick: () => {
        songListRef?.value?.selectedSongs?.forEach((id: string) => {
          playlistStore.removeSongFromPlaylist(id);
        });
      },
    },
    {
      name: "Crop selected",
      onClick: () => {},
      disabled: true,
    },
    {
      name: "Clear playlist",
      onClick: playlistStore.clearPlaylist,
    },
    {
      name: "Remove...",
      subOptions: [
        {
          name: "Remove missing file(s) from playlist",
          disabled: true,
        },
        {
          name: "Physically remove selected file(s)",
          disabled: true,
        },
        {
          name: "Remove duplicate file(s) from playlist",
          disabled: true,
        },
      ],
    },
  ];

  const getSelectOptions = (songListRef: Ref<VNodeRef> | null) => [
    {
      name: "Select all",
      onClick: () => songListRef?.value?.selectAll(),
    },
    {
      name: "Select none",
      onClick: () => songListRef?.value?.selectNone(),
    },
    {
      name: "Invert selection",
      onClick: () => songListRef?.value?.invertSelect(),
    },
  ];

  const getMiscellaneousOptions = (songListRef: Ref<VNodeRef> | null) => [
    {
      name: "File info",
      subOptions: [
        {
          name: "File info...",
          disabled: true,
        },
        {
          name: "Playlist entry...",
          disabled: true,
        },
      ],
    },
    {
      name: "Sort",
      subOptions: [
        {
          name: "Sort list by title",
          disabled: true,
        },
        {
          name: "Sort list by filename",
          disabled: true,
        },
        {
          name: "Sort list by path and filename",
          disabled: true,
        },
        {
          name: "Sort list by duration",
          disabled: true,
        },
        {
          name: "Reverse list",
          disabled: true,
        },
        {
          name: "Randomise list",
          disabled: true,
        },
      ],
    },
    {
      name: "Misc",
      subOptions: [
        {
          name: "Generate HTML playlist",
          disabled: true,
        },
        {
          name: "Rebuild titles on selection",
          disabled: true,
        },
        {
          name: "Insert separator between folders",
          disabled: true,
        },
        {
          name: "Refresh existing separators",
          disabled: true,
        },
        {
          name: "Remove + re-insert all separators",
          disabled: true,
        },
        {
          name: "Remove all separators",
          disabled: true,
        },
        {
          name: "Open separator preferences...",
          disabled: true,
        },
      ],
    },
  ];

  return {
    getAddOptions,
    getRemoveOptions,
    getSelectOptions,
    getMiscellaneousOptions,
  };
};

export type GetOptionsType = (
  songListRef: Ref<VNodeRef> | null
) => ContextMenuOption[];
